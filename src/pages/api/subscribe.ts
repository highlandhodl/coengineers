import type { APIContext } from 'astro';
import { getSupabaseClient } from '../../lib/supabase';
import { sendWelcomeEmail } from '../../lib/email';
import type { SuccessResponse, ErrorResponse, SignupSource } from '../../lib/types';

export const prerender = false;

/**
 * POST /api/subscribe
 *
 * Subscribe a new email address to the mailing list.
 * Handles both JSON and form-encoded requests.
 * Implements upsert logic for duplicate emails.
 */
export async function POST(context: APIContext): Promise<Response> {
  try {
    // Parse request body (form data or JSON)
    let email: string | undefined;
    let source: SignupSource = 'website';

    const contentType = context.request.headers.get('content-type') || '';

    if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await context.request.formData();
      email = formData.get('email') as string | null ?? undefined;
      const formSource = formData.get('source') as string | null;
      if (formSource && isValidSource(formSource)) {
        source = formSource;
      }
    } else {
      const body = await context.request.json();
      email = body.email;
      if (body.source && isValidSource(body.source)) {
        source = body.source;
      }
    }

    // Validate email
    if (!email || !isValidEmail(email)) {
      return jsonResponse<ErrorResponse>(
        { success: false, error: 'Please enter a valid email address.' },
        400
      );
    }

    // Normalise email to lowercase
    email = email.toLowerCase().trim();

    const supabase = getSupabaseClient();

    // Check if subscriber already exists
    const { data: existingSubscriber } = await supabase
      .from('subscribers')
      .select('*')
      .eq('email', email)
      .single();

    let subscriberId: string;
    let unsubscribeToken: string;
    let isNewOrResubscribe = false;

    if (existingSubscriber) {
      if (existingSubscriber.unsubscribed) {
        // Resubscribe: reset unsubscribed status
        const { data: updated, error: updateError } = await supabase
          .from('subscribers')
          .update({
            unsubscribed: false,
            unsubscribed_at: null,
            subscribed_at: new Date().toISOString(),
            source,
          })
          .eq('id', existingSubscriber.id)
          .select()
          .single();

        if (updateError) {
          console.error('Supabase update error:', updateError);
          return jsonResponse<ErrorResponse>(
            { success: false, error: 'Something went wrong. Please try again later.' },
            500
          );
        }

        subscriberId = updated.id;
        unsubscribeToken = updated.unsubscribe_token;
        isNewOrResubscribe = true;
      } else {
        // Already subscribed
        return jsonResponse<SuccessResponse>(
          { success: true, message: "You're already subscribed!" },
          200
        );
      }
    } else {
      // New subscriber: insert
      const { data: newSubscriber, error: insertError } = await supabase
        .from('subscribers')
        .insert({
          email,
          source,
          subscribed_at: new Date().toISOString(),
          unsubscribed: false,
        })
        .select()
        .single();

      if (insertError) {
        console.error('Supabase insert error:', insertError);
        return jsonResponse<ErrorResponse>(
          { success: false, error: 'Something went wrong. Please try again later.' },
          500
        );
      }

      subscriberId = newSubscriber.id;
      unsubscribeToken = newSubscriber.unsubscribe_token;
      isNewOrResubscribe = true;
    }

    // Send welcome email for new subscribers or resubscribes
    if (isNewOrResubscribe) {
      try {
        const emailResult = await sendWelcomeEmail(email, unsubscribeToken);

        // Record email send
        await supabase.from('email_sends').insert({
          subscriber_id: subscriberId,
          email_type: 'welcome',
          resend_id: emailResult?.id || null,
        });
      } catch (emailError) {
        // Log error but don't fail the subscription
        console.error('Welcome email failed:', emailError);
        // Subscriber is still saved - email failure is non-blocking
      }
    }

    return jsonResponse<SuccessResponse>(
      { success: true, message: "You're in! Check your inbox." },
      201
    );
  } catch (error) {
    console.error('Subscribe endpoint error:', error);
    return jsonResponse<ErrorResponse>(
      { success: false, error: 'Something went wrong. Please try again later.' },
      500
    );
  }
}

/**
 * Validate email format using RFC 5322 simplified pattern.
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validate signup source.
 */
function isValidSource(source: string): source is SignupSource {
  return ['website', 'homepage', 'community-page', 'day-page'].includes(source);
}

/**
 * Create JSON response with proper headers.
 */
function jsonResponse<T>(body: T, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

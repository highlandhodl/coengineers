import type { APIContext } from 'astro';
import { getSupabaseClient } from '../../lib/supabase';

export const prerender = false;

/**
 * GET /api/unsubscribe
 *
 * Unsubscribe a user via their unique token.
 * One-click unsubscribe as per email best practices.
 */
export async function GET(context: APIContext): Promise<Response> {
  const token = context.url.searchParams.get('token');

  // Validate token exists and is UUID format
  if (!token || !isValidUUID(token)) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Invalid unsubscribe link.',
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const supabase = getSupabaseClient();

    // Look up subscriber by token
    const { data: subscriber, error: selectError } = await supabase
      .from('subscribers')
      .select('id, email, unsubscribed')
      .eq('unsubscribe_token', token)
      .single();

    if (selectError || !subscriber) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Subscription not found.',
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Already unsubscribed - still show success
    if (subscriber.unsubscribed) {
      return new Response(getUnsubscribedHtml(), {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
      });
    }

    // Mark as unsubscribed
    const { error: updateError } = await supabase
      .from('subscribers')
      .update({
        unsubscribed: true,
        unsubscribed_at: new Date().toISOString(),
      })
      .eq('id', subscriber.id);

    if (updateError) {
      console.error('Unsubscribe update error:', updateError);
      return new Response(JSON.stringify({
        success: false,
        error: 'Something went wrong. Please try again.',
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Return confirmation HTML
    return new Response(getUnsubscribedHtml(), {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    });

  } catch (error) {
    console.error('Unsubscribe endpoint error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Something went wrong. Please try again.',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

/**
 * Validate UUID format.
 */
function isValidUUID(str: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

/**
 * Generate unsubscribe confirmation HTML.
 */
function getUnsubscribedHtml(): string {
  return `
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribed - CoEngineers</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      background: #f5f5f5;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .container {
      background: white;
      padding: 3rem;
      border-radius: 1rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      text-align: center;
      max-width: 480px;
    }
    h1 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      color: #1a1a1a;
    }
    p {
      color: #666;
      margin-bottom: 1.5rem;
    }
    a {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: #F97316;
      color: white;
      text-decoration: none;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: background 0.2s;
    }
    a:hover { background: #E8850F; }
    .icon {
      width: 64px;
      height: 64px;
      margin-bottom: 1rem;
      color: #22c55e;
    }
  </style>
</head>
<body>
  <div class="container">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
    <h1>You've been unsubscribed</h1>
    <p>Sorry to see you go. You won't receive any more emails from us.</p>
    <a href="/">Return to CoEngineers</a>
  </div>
</body>
</html>
  `.trim();
}

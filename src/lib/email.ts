import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

/**
 * Send welcome email to new subscriber.
 *
 * @param email - Subscriber's email address
 * @param unsubscribeToken - UUID token for unsubscribe link
 * @returns Resend response data with message ID
 */
export async function sendWelcomeEmail(
  email: string,
  unsubscribeToken: string,
) {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || "https://coengineers.ai";
  const unsubscribeUrl = `${siteUrl}/api/unsubscribe?token=${unsubscribeToken}`;

  // Use test sender in development, production sender when domain is verified
  const fromAddress =
    import.meta.env.RESEND_FROM_EMAIL || "CoEngineers <onboarding@resend.dev>";

  const { data, error } = await resend.emails.send({
    from: fromAddress,
    to: email,
    subject: "You're in! Here's what happens next",
    html: getWelcomeEmailHtml(unsubscribeUrl, siteUrl),
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error(`Email failed: ${error.message}`);
  }

  return data;
}

/**
 * Generate welcome email HTML template.
 * Uses British English throughout.
 */
function getWelcomeEmailHtml(unsubscribeUrl: string, siteUrl: string): string {
  return `
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to CoEngineers</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px 40px; text-align: center; border-bottom: 3px solid #F97316;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #F97316;">CoEngineers</h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: #666;">20 Labs Across 4 Themes</p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; font-size: 24px; color: #1a1a1a;">You're in! 🎉</h2>

              <p style="margin: 0 0 16px 0; font-size: 16px; color: #333;">
                Thanks for signing up for <strong>CoEngineers</strong>. You've just taken the first step towards becoming a productivity powerhouse.
              </p>

              <p style="margin: 0 0 24px 0; font-size: 16px; color: #333;">
                When you're ready to start, everything you need is waiting. Here's how to prepare:
              </p>

              <!-- Prerequisites -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                <tr>
                  <td style="padding: 16px; background-color: #FFF7ED; border-radius: 6px; border-left: 4px solid #F97316;">
                    <p style="margin: 0 0 12px 0; font-size: 15px; color: #333;"><strong>What you'll need:</strong></p>
                    <ul style="margin: 0; padding-left: 20px; color: #333; font-size: 15px;">
                      <li style="margin-bottom: 8px;">
                        <strong>Claude Code licence</strong> – <a href="https://www.anthropic.com/pricing" style="color: #F97316; text-decoration: none;">Anthropic pricing</a> (required for all labs)
                      </li>
                      <li>
                        <strong>API licence</strong> – Optional, only needed for Theme 4's external API labs
                      </li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- Code Access -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                <tr>
                  <td style="padding: 16px; background-color: #F0FDF4; border-radius: 6px; border-left: 4px solid #22C55E;">
                    <p style="margin: 0 0 12px 0; font-size: 15px; color: #333;"><strong>Get the course code:</strong></p>
                    <ul style="margin: 0; padding-left: 20px; color: #333; font-size: 15px;">
                      <li style="margin-bottom: 8px;">
                        <strong>Option 1:</strong> Clone via Claude Code – <code style="background: #E5E7EB; padding: 2px 6px; border-radius: 4px; font-size: 13px;">gh repo clone coengineers/course-materials</code>
                      </li>
                      <li>
                        <strong>Option 2:</strong> <a href="https://github.com/coengineers/course-materials/archive/refs/heads/main.zip" style="color: #22C55E; text-decoration: none;">Download as ZIP</a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- Preparation Steps -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; background-color: #EFF6FF; border-radius: 6px; border-left: 4px solid #3B82F6;">
                    <p style="margin: 0 0 12px 0; font-size: 15px; color: #333;"><strong>Before you begin:</strong></p>
                    <ul style="margin: 0; padding-left: 20px; color: #333; font-size: 15px;">
                      <li style="margin-bottom: 8px;">
                        <a href="https://docs.anthropic.com/en/docs/claude-code/getting-started" style="color: #3B82F6; text-decoration: none;">Install Claude Code</a> – Get set up in 5 minutes
                      </li>
                      <li style="margin-bottom: 8px;">
                        Install <a href="https://obsidian.md" style="color: #3B82F6; text-decoration: none;">Obsidian</a> – Free note-taking app for Themes 1-2
                      </li>
                      <li>
                        <a href="https://linkedin.com/company/coengineers" style="color: #3B82F6; text-decoration: none;">Follow on LinkedIn</a> – Tips and updates
                      </li>
                    </ul>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 16px 0; font-size: 16px; color: #333;">
                I genuinely can't wait to share this with you. Claude Code has completely changed how I work, and I think it'll do the same for you.
              </p>

              <p style="margin: 0; font-size: 16px; color: #333;">
                Cheers,<br/>
                <strong>John</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #666; text-align: center;">
                You received this because you subscribed at <a href="${siteUrl}" style="color: #F97316; text-decoration: none;">coengineers.ai</a>
              </p>
              <p style="margin: 0; font-size: 12px; color: #666; text-align: center;">
                <a href="${unsubscribeUrl}" style="color: #666; text-decoration: underline;">Unsubscribe</a> ·
                <a href="${siteUrl}/privacy" style="color: #666; text-decoration: underline;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

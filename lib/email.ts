import { Resend } from 'resend'
import type { ContactFormData } from './validation'

// Initialize Resend only if API key is available (not during build time)
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export interface EmailMetadata {
  timestamp: string
  userAgent?: string
  ip?: string
  referrer?: string
}

export async function sendContactEmail(
  data: ContactFormData,
  metadata: EmailMetadata
): Promise<{ success: boolean; error?: string }> {
  const toEmail = process.env.CONTACT_TO_EMAIL

  if (!toEmail) {
    console.error('CONTACT_TO_EMAIL environment variable is not set')
    return { success: false, error: 'Email configuration error' }
  }

  if (!resend || !process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set')
    return { success: false, error: 'Email configuration error' }
  }

  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #0f172a 0%, #06b6d4 100%);
      color: white;
      padding: 30px;
      border-radius: 8px 8px 0 0;
    }
    .content {
      background: #f8fafc;
      padding: 30px;
      border: 1px solid #e2e8f0;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-weight: 600;
      color: #475569;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .value {
      margin-top: 5px;
      color: #0f172a;
    }
    .message-box {
      background: white;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      margin-top: 10px;
    }
    .metadata {
      background: #f1f5f9;
      padding: 20px;
      border-radius: 0 0 8px 8px;
      font-size: 12px;
      color: #64748b;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0;">New Contact Form Submission</h1>
  </div>
  
  <div class="content">
    <div class="field">
      <div class="label">Name</div>
      <div class="value">${data.firstName} ${data.lastName}</div>
    </div>
    
    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
    </div>
    
    ${data.phone ? `
    <div class="field">
      <div class="label">Phone</div>
      <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
    </div>
    ` : ''}
    
    <div class="field">
      <div class="label">Message</div>
      <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
    </div>
  </div>
  
  <div class="metadata">
    <strong>Submission Details:</strong><br>
    Time: ${metadata.timestamp}<br>
    ${metadata.ip ? `IP: ${metadata.ip}<br>` : ''}
    ${metadata.userAgent ? `User Agent: ${metadata.userAgent}<br>` : ''}
    ${metadata.referrer ? `Referrer: ${metadata.referrer}<br>` : ''}
  </div>
</body>
</html>
  `

  try {
    const result = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Change this to your verified domain
      to: toEmail,
      replyTo: data.email,
      subject: `Contact Form: ${data.firstName} ${data.lastName}`,
      html: emailHtml,
    })

    if (result.error) {
      console.error('Resend API error:', result.error)
      return { success: false, error: 'Failed to send email' }
    }

    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: 'Failed to send email' }
  }
}


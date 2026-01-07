import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, formData } = body;

    if (!formType || !formData) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get the sender and recipient emails from environment
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const recipientEmail = process.env.RESEND_RECIPIENT_EMAIL || body.recipientEmail || 'commercial.sales@legendmotorsuae.com';
    
    // Format email subject based on form type
    const getSubject = () => {
      switch (formType) {
        case 'test-drive':
          return 'Test Drive Request - FORLAND';
        case 'get-in-touch':
          return 'Contact Form Submission - FORLAND';
        case 'service':
          return 'Service Request - FORLAND';
        case 'request-quote':
          return 'Quote Request - FORLAND';
        default:
          return 'Form Submission - FORLAND';
      }
    };

    // Get title for email header
    const getTitle = () => {
      switch (formType) {
        case 'test-drive':
          return 'Test Drive Request';
        case 'get-in-touch':
          return 'Contact Form Submission';
        case 'service':
          return 'Service Request';
        case 'request-quote':
          return 'Quote Request';
        default:
          return 'Form Submission';
      }
    };

    // Format email HTML based on form type
    const getEmailHtml = () => {
      let html = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(90deg, #000000 0%, #910000 100%); padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; margin-top: 20px; border-radius: 5px; }
            .content h1 { color: #DF0011 !important; margin: 0 0 20px 0; font-size: 24px; font-weight: bold; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #DF0011; }
            .value { margin-top: 5px; color: #333; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
            </div>
            <div class="content">
              <h1>${getTitle()}</h1>
      `;

      // Add form-specific fields
      if (formData.first_name) {
        html += `<div class="field"><div class="label">First Name:</div><div class="value">${formData.first_name}</div></div>`;
      }
      if (formData.last_name) {
        html += `<div class="field"><div class="label">Last Name:</div><div class="value">${formData.last_name}</div></div>`;
      }
      if (formData.email) {
        html += `<div class="field"><div class="label">Email:</div><div class="value">${formData.email}</div></div>`;
      }
      if (formData.phone) {
        html += `<div class="field"><div class="label">Phone:</div><div class="value">${formData.phone}</div></div>`;
      }
      if (formData.model) {
        html += `<div class="field"><div class="label">Model:</div><div class="value">${formData.model}</div></div>`;
      }
      if (formData.emirates) {
        html += `<div class="field"><div class="label">Emirates:</div><div class="value">${formData.emirates}</div></div>`;
      }
      if (formData.subject) {
        html += `<div class="field"><div class="label">Subject:</div><div class="value">${formData.subject}</div></div>`;
      }
      if (formData.message) {
        html += `<div class="field"><div class="label">Message:</div><div class="value">${formData.message}</div></div>`;
      }
      if (formData.additional_info) {
        html += `<div class="field"><div class="label">Additional Information:</div><div class="value">${formData.additional_info}</div></div>`;
      }

      html += `
            </div>
            <div class="footer">
              <p>This email was sent from the FORLAND website contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `;

      return html;
    };

    // Send email
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: getSubject(),
      html: getEmailHtml(),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}


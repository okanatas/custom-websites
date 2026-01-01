import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, verifySMTPConnection } from '@/lib/email';
import { getConfig } from '@/lib/config';

/**
 * POST /api/email - Send email
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, formData } = body;

    // Validate request
    if (!type || !formData) {
      return NextResponse.json(
        { success: false, error: 'Missing type or formData' },
        { status: 400 }
      );
    }

    const config = getConfig();
    const recipientEmail = config.recipientEmail;

    // Format email content based on type
    let subject: string;
    let template: string;
    let variables: Record<string, string>;

    if (type === 'contact') {
      subject = `New Contact Form Message from ${formData.name}`;
      template = 'contact-request';
      variables = {
        name: formData.name || 'N/A',
        email: formData.email || 'N/A',
        subject: formData.subject || 'N/A',
        message: formData.message || 'N/A',
      };
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid request type' },
        { status: 400 }
      );
    }

    // Send email
    await sendEmail({
      to: recipientEmail,
      subject,
      template,
      variables,
    });

    // Optionally send a confirmation email to the user (if enabled)
    if (config.sendConfirmationEmail && formData.email) {
      try {
        await sendEmail({
          to: formData.email,
          subject: `Thank you for contacting ${config.brandName}`,
          template: 'contact-confirmation',
          variables: {
            name: formData.name || 'there',
          },
        });
      } catch (error) {
        // Log but don't fail the request if confirmation email fails
        console.error('Failed to send confirmation email:', error);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Email API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

/**
 * GET /api/email/verify - Verify SMTP connection
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    if (action === 'verify') {
      const result = await verifySMTPConnection();
      return NextResponse.json(result, {
        status: result.success ? 200 : 500,
      });
    }

    return NextResponse.json(
      { error: 'Invalid action. Use ?action=verify' },
      { status: 400 }
    );
  } catch (error) {
    console.error('SMTP verification error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

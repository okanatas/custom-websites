import nodemailer, { type Transporter } from 'nodemailer';
import { getSMTPConfigLazy, getConfig } from './config';
import * as fs from 'fs';
import * as path from 'path';

let transporter: Transporter | null = null;

/**
 * Initialize email transporter
 */
function getTransporter(): Transporter {
  if (!transporter) {
    const smtpConfig = getSMTPConfigLazy();

    transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: smtpConfig.auth,
    });
  }

  return transporter;
}

/**
 * Load HTML template from file
 */
function loadTemplate(templateName: string, variables: Record<string, string>): string {
  const templatesDir = path.join(process.cwd(), 'templates', 'email');
  const templatePath = path.join(templatesDir, `${templateName}.html`);

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Email template not found: ${templateName}.html`);
  }

  let template = fs.readFileSync(templatePath, 'utf-8');

  // Replace variables in template
  // Format: {{variableName}}
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
    template = template.replace(regex, value);
  });

  return template;
}

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  template?: string; // Template name (without .html extension)
  html?: string; // Direct HTML content
  text?: string; // Plain text fallback
  variables?: Record<string, string>; // Variables for template replacement
  from?: {
    name?: string;
    email?: string;
  };
}

/**
 * Send email using SMTP
 */
export async function sendEmail(options: SendEmailOptions): Promise<void> {
  const smtpConfig = getSMTPConfigLazy();
  const emailTransporter = getTransporter();

  let html: string;

  if (options.template) {
    // Automatically inject brandName and year into template variables
    const config = getConfig();
    const templateVariables = {
      brandName: config.brandName,
      year: new Date().getFullYear().toString(),
      ...options.variables, // User-provided variables override defaults
    };
    // Load template and replace variables
    html = loadTemplate(options.template, templateVariables);
  } else if (options.html) {
    html = options.html;
  } else {
    throw new Error('Either template or html must be provided');
  }

  const fromName = options.from?.name || smtpConfig.from.name;
  const fromEmail = options.from?.email || smtpConfig.from.email;

  const mailOptions = {
    from: `"${fromName}" <${fromEmail}>`,
    to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
    subject: options.subject,
    html,
    text: options.text || html.replace(/<[^>]*>/g, ''), // Strip HTML tags for text fallback
  };

  try {
    const info = await emailTransporter.sendMail(mailOptions);
    const recipient = Array.isArray(options.to) ? options.to.join(', ') : options.to;
    const messageId = String((info as { messageId?: string }).messageId || 'unknown');
    console.log(`[EMAIL] Sent email to ${recipient}: ${messageId}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const recipient = Array.isArray(options.to) ? options.to.join(', ') : options.to;
    console.error(`[EMAIL] Failed to send email to ${recipient}:`, errorMessage);
    throw new Error(`Failed to send email: ${errorMessage}`);
  }
}

/**
 * Verify SMTP connection
 */
export async function verifySMTPConnection(): Promise<{ success: boolean; message: string; error?: string }> {
  try {
    const emailTransporter = getTransporter();
    await emailTransporter.verify();
    return {
      success: true,
      message: 'SMTP connection verified successfully',
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      success: false,
      message: 'SMTP connection verification failed',
      error: errorMessage,
    };
  }
}



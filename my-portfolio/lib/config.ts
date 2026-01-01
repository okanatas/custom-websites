/**
 * Global configuration for the ArtPiecesProject app
 * Loads from environment variables
 */

export interface SMTPConfig {
  host: string;
  port: number;
  secure: boolean; // true for 465, false for other ports
  auth: {
    user: string;
    pass: string;
  };
  from: {
    name: string;
    email: string;
  };
}

export interface AppConfig {
  smtp: SMTPConfig;
  brandName: string;
  recipientEmail: string; // Email address to receive form submissions
  sendConfirmationEmail: boolean; // Whether to send thank you email to requester
  contactEmail?: string; // Contact email to display in footer (if CONTACT_EMAIL starts with "email:")
  contactRedirectPath?: string; // Redirect path for email icon (if CONTACT_EMAIL starts with "redirect:")
}

/**
 * Get SMTP configuration from environment variables
 */
function getSMTPConfig(): SMTPConfig {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const brandName = process.env.BRAND_NAME || 'Portfolio';
  const fromName = process.env.SMTP_FROM_NAME || brandName;
  const fromEmail = process.env.SMTP_FROM_EMAIL || user || 'noreply@example.com';

  if (!host) {
    throw new Error('Missing SMTP_HOST environment variable. Please set it in .env.local');
  }

  if (!user) {
    throw new Error('Missing SMTP_USER environment variable. Please set it in .env.local');
  }

  if (!pass) {
    throw new Error('Missing SMTP_PASSWORD environment variable. Please set it in .env.local');
  }

  return {
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    from: {
      name: fromName,
      email: fromEmail,
    },
  };
}

/**
 * Get application configuration
 */
export function getConfig(): AppConfig {
  const brandName = process.env.BRAND_NAME || 'Portfolio';
  const recipientEmail = process.env.RECIPIENT_EMAIL;
  // Default to true (enabled) if not specified
  const sendConfirmationEmail = process.env.SEND_CONFIRMATION_EMAIL !== 'false';
  
  // Parse CONTACT_EMAIL: supports "email:myemail@example.com" or "redirect:/path/to/page"
  const contactEmailEnv = process.env.CONTACT_EMAIL;
  let contactEmail: string | undefined;
  let contactRedirectPath: string | undefined;
  
  if (contactEmailEnv) {
    if (contactEmailEnv.startsWith('email:')) {
      contactEmail = contactEmailEnv.substring(6); // Remove "email:" prefix
    } else if (contactEmailEnv.startsWith('redirect:')) {
      contactRedirectPath = contactEmailEnv.substring(9); // Remove "redirect:" prefix
    }
  }

  if (!recipientEmail) {
    throw new Error('Missing RECIPIENT_EMAIL environment variable. Please set it in .env.local');
  }

  return {
    smtp: getSMTPConfig(),
    brandName,
    recipientEmail,
    sendConfirmationEmail,
    contactEmail,
    contactRedirectPath,
  };
}

/**
 * Get SMTP configuration (lazy loaded)
 */
let smtpConfig: SMTPConfig | null = null;

export function getSMTPConfigLazy(): SMTPConfig {
  if (!smtpConfig) {
    smtpConfig = getSMTPConfig();
  }
  return smtpConfig;
}



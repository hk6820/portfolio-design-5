// Import email configuration from main config file
import { emailConfig } from '../config/portfolioConfig';

export const EMAIL_SERVICE_ID = emailConfig.serviceId;
export const EMAIL_TEMPLATE_ID = emailConfig.templateId;
export const EMAIL_PUBLIC_KEY = emailConfig.publicKey;

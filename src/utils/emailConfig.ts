// Email service configuration
export const EMAIL_SERVICE_ID = 'service_9cjlbbc';
export const EMAIL_TEMPLATE_ID_CAREERS = 'template_8qgve7o';
export const EMAIL_PUBLIC_KEY = 'JYi8NlKp6UccPd_vD';

// Initialize EmailJS
import emailjs from '@emailjs/browser';
emailjs.init(EMAIL_PUBLIC_KEY);
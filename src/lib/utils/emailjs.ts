import emailjs from 'emailjs-com';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Send email using EmailJS
 */
export async function sendEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';

    if (!serviceId || !templateId || !userId) {
      console.error('EmailJS credentials not configured');
      return false;
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      userId
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}

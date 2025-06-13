import { useState } from 'react';
import emailjs from '@emailjs/browser';

const useEmailJS = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const SERVICE_ID = 'service_hg1godr';
  const TEMPLATE_ID = 'template_ms6pzk8';
  const PUBLIC_KEY = 'N8hN6nhdlQuWaKFyP';

  const sendEmail = async (templateParams, attachments = []) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Convert file attachments to base64 if needed
      const processedParams = { ...templateParams };
      
      if (attachments.length > 0) {
        const attachmentPromises = attachments.map(async (file, index) => {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
              resolve({
                name: file.name,
                content: reader.result.split(',')[1], // Remove data:type;base64, prefix
                type: file.type
              });
            };
            reader.readAsDataURL(file);
          });
        });

        const processedAttachments = await Promise.all(attachmentPromises);
        processedParams.attachments = JSON.stringify(processedAttachments);
      }

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        processedParams,
        PUBLIC_KEY
      );

      setSuccess(true);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to send email');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
    setLoading(false);
  };

  return {
    sendEmail,
    loading,
    error,
    success,
    reset
  };
};

export default useEmailJS;
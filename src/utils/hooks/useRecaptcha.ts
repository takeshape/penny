import { recaptchaSiteKey } from 'config';
import { useCallback, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export const useRecaptcha = <T>() => {
  const callbackRef = useRef<(recaptchaToken: string) => void>();
  const recaptchaRef = useRef<ReCAPTCHA>();

  const executeRecaptcha = useCallback((callback) => {
    if (recaptchaSiteKey) {
      callbackRef.current = callback;
      recaptchaRef.current.execute();
    } else {
      // eslint-disable-next-line no-console
      console.warn('Recaptcha is not configured.');
      callback('RECAPTCHA_DISABLED');
    }
  }, []);

  const handleRecaptchaChange = useCallback((recaptchaToken: string) => {
    if (callbackRef.current) {
      callbackRef.current(recaptchaToken);
    }
  }, []);

  return {
    executeRecaptcha,
    recaptchaRef,
    handleRecaptchaChange
  };
};

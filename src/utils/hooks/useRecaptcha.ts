import { useCallback, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export const useRecaptcha = <T>() => {
  const callbackRef = useRef<(recaptchaToken: string) => void>();
  const recaptchaRef = useRef<ReCAPTCHA>();

  const executeRecaptcha = useCallback((callback) => {
    callbackRef.current = callback;
    recaptchaRef.current.execute();
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

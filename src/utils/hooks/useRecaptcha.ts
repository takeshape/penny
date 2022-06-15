import { useCallback, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export const useRecaptcha = <T>() => {
  const recaptchaRef = useRef<ReCAPTCHA>();
  const recaptchaTokenRef = useRef<string>();

  useEffect(() => {
    recaptchaRef.current.execute();
  }, []);

  const handleRecaptchaChange = useCallback((recaptchaToken: string) => {
    recaptchaTokenRef.current = recaptchaToken;
  }, []);

  return {
    recaptchaRef,
    recaptchaTokenRef,
    handleRecaptchaChange
  };
};

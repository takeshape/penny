import { useCallback, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export interface UseRecaptchaArgs<T> {
  handleRecaptchaSubmit: (formValues: T, recaptchaToken: string) => void;
}

export const useRecaptcha = <T>({ handleRecaptchaSubmit }: UseRecaptchaArgs<T>) => {
  const recaptchaRef = useRef<ReCAPTCHA>();
  const valueRef = useRef<T>();

  const submitCallback = useCallback(
    async (formValues: T) => {
      valueRef.current = formValues;
      recaptchaRef.current.execute();
    },
    [recaptchaRef]
  );

  const handleRecaptchaChange = useCallback(
    (recaptchaToken: string) => {
      handleRecaptchaSubmit(valueRef.current, recaptchaToken);
    },
    [handleRecaptchaSubmit]
  );

  return {
    recaptchaRef,
    submitCallback,
    handleRecaptchaChange
  };
};

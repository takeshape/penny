import { recaptchaSiteKey } from 'config';
import { MutableRefObject } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export interface CaptchaProps {
  recaptchaRef?: MutableRefObject<ReCAPTCHA | null>;
  handleRecaptchaChange: (token: string | null) => void;
}

const Captcha = ({ recaptchaRef, handleRecaptchaChange }: CaptchaProps) => {
  if (!recaptchaSiteKey || !recaptchaRef) {
    return null;
  }

  return <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={recaptchaSiteKey} onChange={handleRecaptchaChange} />;
};

export default Captcha;

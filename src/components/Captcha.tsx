import { recaptchaSiteKey } from 'config';
import { MutableRefObject } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export interface CaptchaProps {
  recaptchaRef: MutableRefObject<ReCAPTCHA>;
  handleRecaptchaChange: (recaptchaToken: string) => void;
}

const Captcha = ({ recaptchaRef, handleRecaptchaChange }: CaptchaProps) => {
  return (
    recaptchaSiteKey !== '' && (
      <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={recaptchaSiteKey} onChange={handleRecaptchaChange} />
    )
  );
};

export default Captcha;

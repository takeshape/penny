export const RecaptchaBranding = () => {
  return (
    <div className="text-sm font-medium text-body-400">
      This site is protected by reCAPTCHA and the Google{' '}
      <a
        className="text-body-400 hover:text-body-500"
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noreferrer"
      >
        Privacy Policy
      </a>{' '}
      and{' '}
      <a
        className="text-body-400 hover:text-body-500"
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noreferrer"
      >
        Terms of Service
      </a>{' '}
      apply.
    </div>
  );
};

export default RecaptchaBranding;

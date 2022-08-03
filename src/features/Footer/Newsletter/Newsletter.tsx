import { ApolloError, useMutation } from '@apollo/client';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import Captcha from 'components/Captcha';
import RecaptchaBranding from 'components/RecaptchaBranding/RecaptchaBranding';
import { defaultKlaviyoListId } from 'config';
import { useCallback, useState } from 'react';
import { NewsletterEmailSubmissionResponse, NewsletterEmailSubmissionVariables } from 'types/takeshape';
import { useRecaptcha } from 'utils/hooks/useRecaptcha';
import { EmailSubmissionMutation } from './queries';

export interface NewsletterProps {
  text?: {
    primary?: string;
    secondary?: string;
    button?: string;
  };
}

export const Newsletter = (props: React.PropsWithChildren<NewsletterProps>) => {
  const { text } = props;
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' }>();
  const onCompleted = useCallback(() => {
    setLoading(false);
    setFeedback({ type: 'success', message: "You've been subscribed. Please check your inbox for confirmation." });
    setTimeout(() => setFeedback(undefined), 10000);
  }, []);
  const onError = useCallback((error: ApolloError) => {
    setLoading(false);
    setFeedback({ type: 'error', message: error.message });
  }, []);
  const [mutateFn] = useMutation<NewsletterEmailSubmissionResponse, NewsletterEmailSubmissionVariables>(
    EmailSubmissionMutation,
    {
      onCompleted,
      onError
    }
  );

  const { executeRecaptcha, recaptchaRef, handleRecaptchaChange } = useRecaptcha();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const email = event.currentTarget.elements['email-address'].value;
      executeRecaptcha((recaptchaToken) => {
        if (email) {
          setLoading(true);
          mutateFn({ variables: { listId: defaultKlaviyoListId, email, recaptchaToken } });
        }
      });
    },
    [executeRecaptcha, mutateFn]
  );

  return (
    <>
      {text?.primary && (
        <h3 className="text-sm font-semibold text-mainText-400 tracking-wider uppercase">{text.primary}</h3>
      )}
      {text?.secondary && <p className="mt-4 text-base text-mainText-500">{text.secondary}</p>}
      <form className="mt-4 sm:flex" onSubmit={handleSubmit}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-accent-500 focus:border-accent-500 focus:placeholder-gray-400"
          placeholder="Enter your email"
        />
        <Captcha recaptchaRef={recaptchaRef} handleRecaptchaChange={handleRecaptchaChange} />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <Button type="submit" loading={loading ? true : undefined} color="primary" className="w-full h-full">
            {loading ? 'Subscribing…' : text?.button ?? 'Subscribe'}
          </Button>
        </div>
      </form>
      <div className="mt-4">
        <RecaptchaBranding />
      </div>
      {feedback && (
        <div className="mt-2">
          <Alert status={feedback.type} primaryText={feedback.message} />
        </div>
      )}
    </>
  );
};

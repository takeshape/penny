import { ApolloError, useMutation } from '@apollo/client';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import RecaptchaBranding from 'components/RecaptchaBranding/RecaptchaBranding';
import { defaultKlaviyoListId } from 'config';
import { useReCaptcha } from 'next-recaptcha-v3';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NewsletterEmailSubmissionResponse, NewsletterEmailSubmissionVariables } from 'types/takeshape';
import { EmailSubmissionMutation } from './queries';

export interface NewsletterProps {
  text: {
    primary: string | null;
    secondary: string | null;
    button: string | null;
  };
}

interface NewsletterFormValues {
  email: string;
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

  const { handleSubmit, register } = useForm<NewsletterFormValues>();

  const { executeRecaptcha } = useReCaptcha();

  const onSubmit: SubmitHandler<NewsletterFormValues> = useCallback(
    async ({ email }) => {
      const recaptchaToken = await executeRecaptcha('newsletter');

      if (email) {
        setLoading(true);
        mutateFn({ variables: { listId: defaultKlaviyoListId, email, recaptchaToken } });
      }
    },
    [executeRecaptcha, mutateFn]
  );

  return (
    <>
      {text?.primary && (
        <h3 className="text-sm font-semibold text-body-400 tracking-wider uppercase">{text.primary}</h3>
      )}
      {text?.secondary && <p className="mt-4 text-base text-body-500">{text.secondary}</p>}
      <form className="mt-4 sm:flex" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          {...register('email', { required: true })}
          autoComplete="email"
          className="appearance-none min-w-0 w-full bg-background border border-form-300 rounded-md shadow-sm py-2 px-4 text-base text-form-900 placeholder-form-500 focus:outline-none focus:ring-accent-500 focus:border-accent-500 focus:placeholder-form-400"
          placeholder="Enter your email"
        />
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

import { ApolloError, useMutation } from '@apollo/client';
import Alert from 'components/Alert/Alert';
import { defaultKlaviyoListId } from 'config';
import { useCallback, useState } from 'react';
import { Klaviyo_AddMembersResponse } from 'types/takeshape';
import { EmailSubmissionMutation, EmailSubmissionMutationArgs } from './Newsletter.queries';

export interface NewsletterProps {
  text?: {
    primary?: string;
    secondary?: string;
    button?: string;
  };
}

const Newsletter = (props: React.PropsWithChildren<NewsletterProps>) => {
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
  const [mutateFn] = useMutation<Klaviyo_AddMembersResponse, EmailSubmissionMutationArgs>(EmailSubmissionMutation, {
    onCompleted,
    onError
  });
  const subscribeToNewsletter = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const email = e.currentTarget.elements['email-address'].value;
      if (email) {
        setLoading(true);
        mutateFn({ variables: { listId: defaultKlaviyoListId, email: email } });
      }
    },
    [mutateFn]
  );
  return (
    <>
      {text?.primary && (
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{text.primary}</h3>
      )}
      {text?.secondary && <p className="mt-4 text-base text-gray-500">{text.secondary}</p>}
      <form className="mt-4 sm:flex sm:max-w-md" onSubmit={subscribeToNewsletter}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 disabled:bg-indigo-400 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? 'Subscribing…' : text?.button ?? 'Subscribe'}
          </button>
        </div>
      </form>
      {feedback && (
        <div className="mt-2">
          <Alert status={feedback.type} primaryText={feedback.message} />
        </div>
      )}
    </>
  );
};

export default Newsletter;

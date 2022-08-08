import Button from 'components/Button/Button';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export interface CreateReferralProps {
  sendReferral: (props: any) => void;
}

export const CreateReferral = ({ sendReferral }: CreateReferralProps) => {
  const { handleSubmit, reset } = useForm<{ email: string }>({
    defaultValues: {
      email: ''
    }
  });
  const onSubmit = useCallback(
    (data) => {
      sendReferral({ email: data.email, sent: new Date(), earned: false });
      reset();
    },
    [sendReferral, reset]
  );
  return (
    <form className="mt-4 sm:flex" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        name="email-address"
        id="email-address"
        autoComplete="none"
        required
        className="appearance-none min-w-0 w-full bg-background border border-form-300 rounded-md shadow-sm py-2 px-4 text-base text-form-900 placeholder-form-500 focus:outline-none focus:ring-accent-500 focus:border-accent-500 focus:placeholder-form-400"
        placeholder="your.friend@gmail.com"
      />
      <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <Button type="submit" color="primary" className="w-full h-full">
          Send referral
        </Button>
      </div>
    </form>
  );
};

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Input } from 'theme-ui';

export interface ReferralsCreateReferralProps {
  sendReferral: (props: any) => void;
}

export const ReferralsCreateReferral = ({ sendReferral }: ReferralsCreateReferralProps) => {
  const { register, handleSubmit, reset } = useForm<{ email: string }>({
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
    <Box as="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', gap: '1rem' }}>
      <Input {...register('email', { required: true })} sx={{ flex: '1 1 auto' }} placeholder="your.friend@email.com" />
      <Button type="submit" sx={{ flex: '0 1 12rem' }}>
        Send referral
      </Button>
    </Box>
  );
};

export default ReferralsCreateReferral;

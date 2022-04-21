import { useCallback } from 'react';
import { Alert, Box, Button, Flex, Input, Link, Text } from '@theme-ui/components';
import { useForm } from 'react-hook-form';
import { BsCheckCircle, BsGiftFill, BsHourglassSplit } from 'react-icons/bs';

export interface Reward {
  name: string;
  code: string;
}

export interface Referral {
  email: string;
  sent: Date;
  earned: boolean;
}

export const CreateReferral = ({ sendReferral }) => {
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

export const ReferralListItem: React.FC<Referral> = ({ email, sent, earned }) => (
  <Flex sx={{ gap: '1rem', alignItems: 'center' }}>
    {earned ? (
      <BsCheckCircle size={24} color="green" title="Earned Referral" />
    ) : (
      <BsHourglassSplit size={24} color="text" title="Referral Not Yet Earned" />
    )}
    <Text>
      Referred <Link href={`mailto:${email}`}>{email}</Link> on {sent.toLocaleDateString()}
    </Text>
  </Flex>
);

export const ReferralList = ({ referrals }) => {
  const reward: Reward = {
    name: '20% Off One Order',
    code: '1XGHc80'
  };
  return (
    <Box as="ul" sx={{ listStyleType: 'none', padding: 0 }}>
      {referrals.map((referral) => (
        <Box as="li" key={referral.email} sx={{ margin: '1rem 0' }}>
          <ReferralListItem {...referral} />
          {referral.earned && (
            <Alert backgroundColor="highlight" color="text" sx={{ gap: '1rem' }} m={2} ml={4}>
              <BsGiftFill />
              <Text>{reward.name}</Text>
              <Text sx={{ fontWeight: 'normal' }}>Use code {reward.code} at checkout</Text>
            </Alert>
          )}
        </Box>
      ))}
    </Box>
  );
};

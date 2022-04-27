import { BsCheckCircle, BsHourglassSplit } from 'react-icons/bs';
import { Flex, Link, Text } from 'theme-ui';

export interface ReferralsListItemProps {
  email: string;
  sent: Date;
  earned: boolean;
}

export const ReferralsListItem = ({ email, sent, earned }: ReferralsListItemProps) => (
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

export default ReferralsListItem;

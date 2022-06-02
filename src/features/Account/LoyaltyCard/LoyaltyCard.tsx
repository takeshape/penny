import CardPanel from 'components/Card/Panel/Panel';
import { Box, Image, Text } from 'theme-ui';
import type { SetRequired } from 'type-fest';
import type { Voucherify_LoyaltyCard } from 'types/takeshape';

export type AccountLoyaltyCardProps = SetRequired<Voucherify_LoyaltyCard, 'code' | 'loyalty_card' | 'assets'>;

export const AccountLoyaltyCard = ({ code, loyalty_card, assets }: AccountLoyaltyCardProps) => {
  return (
    <CardPanel primaryText="Deluxe ™️ Membership">
      <Box>
        <Box>
          <Image src={assets.qr.url} alt="QR Code" height={84} width={84} />
        </Box>
        <Text as="div" sx={{ textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}></Text>
      </Box>
      <Box as="dl">
        <Text as="dt" variant="styles.membershipTerm">
          Member Code
        </Text>
        <Text as="dd" variant="styles.membershipItem">
          {code}
        </Text>
        <Text as="dt" variant="styles.membershipTerm">
          Balance
        </Text>
        <Text as="dd" variant="styles.membershipItem">
          {loyalty_card.balance} points
        </Text>
      </Box>
    </CardPanel>
  );
};

export default AccountLoyaltyCard;

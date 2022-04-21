import type { Voucherify_LoyaltyCard } from 'lib/takeshape/types';
import { Card, Text, Image, Heading, Box } from '@theme-ui/components';

const LoyaltyCard = ({ code, loyalty_card, assets }: Voucherify_LoyaltyCard) => {
  return (
    <Card variant="loyalty" sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      <Text variant="styles.shopName" sx={{ fontWeight: 'bold', flex: '1 1 100%' }}>
        Kitchen<span>Sink</span> Membership
      </Text>

      <Box>
        <Box>
          <Image src={assets.qr.url} alt="QR Code" height="70px" width="70px" />
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
    </Card>
  );
};

export default LoyaltyCard;

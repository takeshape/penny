import { Box, Paragraph } from 'theme-ui';
import type { Stripe_Subscription } from 'types/takeshape';
import SubscriptionItem from './SubscriptionItem';

export interface SubscriptionListProps {
  subscriptions: Stripe_Subscription[];
}

export const SubscriptionList = ({ subscriptions }: SubscriptionListProps) => {
  if (!subscriptions || !subscriptions.length) return <Paragraph>No subscriptions to display!</Paragraph>;
  const listItems = subscriptions.map(
    (subscription) =>
      subscription.items?.data?.[0] && (
        <Box as="li" key={subscription.id} sx={{ marginBottom: '1rem' }}>
          <SubscriptionItem subscription={subscription} subscriptionItem={subscription.items.data[0]} />
        </Box>
      )
  );
  return (
    <Box as="ul" sx={{ listStyleType: 'none', padding: 0 }}>
      {listItems}
    </Box>
  );
};

export default SubscriptionList;

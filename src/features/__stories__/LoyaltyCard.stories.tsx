import type { ComponentMeta } from '@storybook/react';
import LoyaltyCard from '../purchases/LoyaltyCard';
import purchases from '../__fixtures__/purchases-data.json';

export default {
  title: 'Components/LoyaltyCard',
  component: LoyaltyCard,
  decorators: [(Story) => <div style={{ width: '384px' }}>{Story()}</div>]
} as ComponentMeta<typeof LoyaltyCard>;

export const LoyaltyCardStory = () => <LoyaltyCard {...purchases.data.loyaltyCard} />;

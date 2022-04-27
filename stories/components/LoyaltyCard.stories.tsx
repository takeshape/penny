import type { ComponentMeta } from '@storybook/react';
import LoyaltyCard from '../../components/LoyaltyCard';
import purchases from '../fixtures/purchases-data.json';

export default {
  title: 'Components/LoyaltyCard',
  component: LoyaltyCard,
  decorators: [(Story) => <div style={{ width: '384px' }}>{Story()}</div>]
} as ComponentMeta<typeof LoyaltyCard>;

export const LoyaltyCardStory = () => <LoyaltyCard {...purchases.data.loyaltyCard} />;

import type { ComponentMeta } from '@storybook/react';
import LoyaltyCardComponent from "../../components/loyalty-card";
import purchases from '../fixtures/purchases-data.json';

export default {
  title: "Components/LoyaltyCard",
  component: LoyaltyCardComponent,
  decorators: [
    (Story) => (
      <div style={{width: '384px'}}>
        {Story()}
      </div>
    ),
  ]
} as ComponentMeta<typeof LoyaltyCardComponent>;

export const LoyaltyCard = () => <LoyaltyCardComponent {...purchases.data.loyaltyCard} />

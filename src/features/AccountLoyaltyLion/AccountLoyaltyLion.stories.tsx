import { ComponentMeta } from '@storybook/react';
import { AccountLoyaltyLion } from './AccountLoyaltyLion';

const Meta: ComponentMeta<typeof AccountLoyaltyLion> = {
  title: 'Features / Account LoyaltyLion',
  component: AccountLoyaltyLion
};

const Template = (args) => <AccountLoyaltyLion {...args} />;

export const Woo = Template.bind({});
Woo.args = {
  birthday: null,
  blocked: false,
  created_at: '2022-08-08T22:59:58.198Z',
  email: 'andrew@takeshape.io',
  enrolled: true,
  enrolled_at: '2022-08-08T22:59:58.197Z',
  guest: false,
  id: 456815004,
  insights_segment: null,
  loyalty_tier_membership: {
    default: null,
    hidden: null,
    id: null,
    lower_bound: null,
    name: null,
    number: null,
    upper_bound: null
  },
  merchant_id: '6145627226296',
  metadata: {},
  points_approved: 120,
  points_pending: 0,
  points_spent: 0,
  properties: {
    name: 'Andrew Sprouse',
    last_name: 'Sprouse',
    first_name: 'Andrew',
    rechargeHash: ''
  },
  referral_url: 'https://prz.io/EDNEzXniK',
  referred_by: null,
  rewards: [
    {
      content: {},
      description: null,
      discount_amount: 5,
      discount_type: 'flat',
      id: 120404,
      kind: 'cart_discount_voucher',
      max_free_shipping: null,
      max_redemption_amount: 1,
      method: 'voucher',
      min_redemption_amount: 1,
      minimum_spend: null,
      order_type: 'one_time',
      point_cost: 500,
      site_id: 29724,
      target_type: 'all',
      title: '$5 voucher',
      usage_limit: 1
    },
    {
      content: {},
      description: null,
      discount_amount: 10,
      discount_type: 'flat',
      id: 121986,
      kind: 'cart_discount_voucher',
      max_free_shipping: null,
      max_redemption_amount: 1,
      method: 'voucher',
      min_redemption_amount: 1,
      minimum_spend: null,
      order_type: 'one_time',
      point_cost: 1000,
      site_id: 29724,
      target_type: 'all',
      title: '$10 voucher',
      usage_limit: 1
    }
  ],
  rewards_claimed: 0,
  updated_at: '2022-08-25T21:12:14.365Z'
};

export default Meta;

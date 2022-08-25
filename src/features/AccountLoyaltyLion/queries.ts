import { gql } from '@apollo/client';

export const GetMyLoyaltyLionCustomerQuery = gql`
  query GetMyLoyaltyLionCustomerQuery {
    loyaltyCard: getMyLoyaltyLionCustomer {
      birthday
      blocked
      created_at
      email
      enrolled
      enrolled_at
      guest
      id
      insights_segment
      loyalty_tier_membership {
        default
        hidden
        id
        lower_bound
        name
        number
        upper_bound
      }
      merchant_id
      metadata
      points_approved
      points_pending
      points_spent
      properties
      referral_url
      referred_by
      rewards {
        content
        description
        discount_amount
        discount_type
        id
        kind
        max_free_shipping
        max_redemption_amount
        method
        min_redemption_amount
        minimum_spend
        order_type
        point_cost
        site_id
        target_type
        title
        usage_limit
      }
      rewards_claimed
      updated_at
    }
  }
`;

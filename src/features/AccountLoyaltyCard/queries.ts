import { gql } from '@apollo/client';
import { Voucherify_LoyaltyCard } from 'types/takeshape';

export interface GetMyLoyaltyCardResponse {
  loyaltyCard: Voucherify_LoyaltyCard;
}

export const GetMyLoyaltyCardQuery = gql`
  query GetMyLoyaltyCardQuery {
    loyaltyCard: getMyLoyaltyCard {
      id
      code
      campaign
      loyalty_card {
        points
        balance
      }
      assets {
        qr {
          id
          url
        }
      }
    }
  }
`;

import { gql } from '@apollo/client';

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

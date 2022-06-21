import { gql } from '@apollo/client';
import { Storefront } from 'types/takeshape';

export interface GetStorefrontResponse {
  storefront: Storefront;
}

export const GetStorefrontQuery = gql`
  query GetStorefrontQuery {
    storefront: getStorefront {
      components {
        __typename
        ... on OffersComponent {
          offers {
            href
            name
            description
          }
        }
        ... on HeroComponent {
          primaryText
          secondaryText
          buttonText
          image {
            path
            description
          }
        }
        ... on CollectionsComponent {
          collections {
            name
            description
            href
            image {
              path
              description
            }
          }
        }
        ... on BackgroundImageComponent {
          image {
            path
            description
          }
          components {
            __typename
            ... on SaleComponent {
              primaryText
              secondaryText
              buttonText
            }
            ... on TestimonialsComponent {
              testimonials {
                quote
                attribution
              }
            }
          }
        }
      }
    }
  }
`;

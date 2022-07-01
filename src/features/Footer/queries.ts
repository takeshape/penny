import { gql } from '@apollo/client';

export const FooterQuery = gql`
  query FooterQuery {
    footer: getFooter {
      navigation {
        sections {
          name
          links {
            __typename
            ... on Collection {
              shopifyCollection {
                title
                handle
              }
            }
            ... on Product {
              shopifyProduct {
                title
                handle
              }
            }
            ... on Link {
              name
              href
            }
            ... on Page {
              title
              slug
            }
          }
        }
      }
      newsletter {
        text {
          primary
          secondary
          button
        }
      }
    }
  }
`;

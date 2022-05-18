import { gql } from '@apollo/client';

export const GetFooterQuery = gql`
  query GetFooter {
    footer: getFooter {
      navigation {
        sections {
          name
          items {
            name
            href
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

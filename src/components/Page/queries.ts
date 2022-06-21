import { gql } from '@apollo/client';
import { Page } from 'types/takeshape';

export type GetPageResponse = {
  page: Page;
};

export const GetPageQuery = gql`
  query ($_id: ID!) {
    page: getPage(_id: $_id) {
      _id
      sections {
        ... on PageSectionTitle {
          heading
          label
          subheading
        }
        ... on PageSectionMdx {
          content(format: html)
        }
      }
      title
    }
  }
`;

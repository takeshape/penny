import { gql } from '@apollo/client';

export const PageGetPageSlugs = gql`
  query GetPageSlugs {
    pageList: getPageList(size: 100) {
      items {
        _id
        slug
        title
      }
    }
  }
`;

export const PageGetPage = gql`
  query PageGetPage($slug: String!) {
    pageList: getPageList(size: 1, where: { slug: { eq: $slug }, _status: { eq: "enabled" } }) {
      items {
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
  }
`;

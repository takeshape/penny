#!/usr/bin/env node

import { gql, GraphQLClient } from 'graphql-request';
import { mkdir, writeFile } from 'node:fs/promises';

const generatedDataPath = './src/generated';

const NavigationQuery = gql`
  query NavigationQuery {
    navigation: getNavigation {
      messageHtml
      sections {
        name
        link {
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
          ... on Page {
            title
            slug
          }
          ... on Link {
            name
            href
          }
        }
        subsections {
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
            ... on Page {
              title
              slug
            }
            ... on Link {
              name
              href
            }
          }
        }
      }
    }
  }
`;

const FooterQuery = gql`
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

const takeshapeApiUrl = process.env.NEXT_PUBLIC_TAKESHAPE_API_URL;
const takeshapeAnonymousApiKey = process.env.NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY;

const client = new GraphQLClient(takeshapeApiUrl, {
  headers: {
    authorization: `Bearer ${takeshapeAnonymousApiKey}`
  }
});

export async function getLayoutData() {
  const layoutData = {};

  const data = await client.request(FooterQuery);
  layoutData.footer = data;

  // const {
  //   data: { navigation }
  // } = await client.query(NavigationQuery);
  // layoutData.navigation = navigation;

  return layoutData;
}

async function main() {
  const data = await getLayoutData();
  mkdir(generatedDataPath, { recursive: true });
  await writeFile(`${generatedDataPath}/sharedData.json`, JSON.stringify(data));
}

main();

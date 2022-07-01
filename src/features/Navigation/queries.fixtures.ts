import { NavigationQueryResponse } from 'types/takeshape';

export const navigationResponse: NavigationQueryResponse = {
  navigation: {
    messageHtml: 'Get free delivery on orders over $100',
    sections: [
      {
        name: 'Women',
        link: {
          __typename: 'Collection',
          shopifyCollection: {
            title: 'Women',
            handle: 'women'
          }
        },
        subsections: [
          {
            name: 'Featured',
            links: [
              {
                __typename: 'Collection',
                shopifyCollection: {
                  title: 'Shirts & Tops',
                  handle: 'men-shirts-tops'
                }
              },
              {
                __typename: 'Product',
                shopifyProduct: {
                  title: 'White Cotton Shirt',
                  handle: 'white-cotton-shirt'
                }
              },
              {
                __typename: 'Page',
                title: 'Test',
                slug: 'test'
              },
              {
                __typename: 'Link',
                name: 'Sleep',
                href: '/sleep'
              }
            ]
          }
        ]
      },
      {
        name: 'Men',
        link: {
          __typename: 'Collection',
          shopifyCollection: {
            title: 'Men',
            handle: 'men'
          }
        },
        subsections: [
          {
            name: 'Featured',
            links: [
              {
                __typename: 'Collection',
                shopifyCollection: {
                  title: "Men's Multipacks",
                  handle: 'mens-multipacks'
                }
              },
              {
                __typename: 'Collection',
                shopifyCollection: {
                  title: "Men's Basic Tees",
                  handle: 'mens-basic-tees'
                }
              },
              {
                __typename: 'Collection',
                shopifyCollection: {
                  title: 'FLEX FIT',
                  handle: 'flex-fit'
                }
              },
              {
                __typename: 'Collection',
                shopifyCollection: {
                  title: 'TIMBERLAND',
                  handle: 'timberland'
                }
              }
            ]
          },
          {
            name: 'Links',
            links: [
              {
                __typename: 'Link',
                name: 'Sleep',
                href: '/sleep'
              },
              {
                __typename: 'Page',
                title: 'About',
                slug: 'about'
              },
              {
                __typename: 'Link',
                name: 'Company',
                href: '/about'
              }
            ]
          }
        ]
      },
      {
        name: 'Company',
        link: {
          __typename: 'Page',
          title: 'About',
          slug: 'about'
        },
        subsections: null
      }
    ]
  }
};

import { FooterResponse } from 'types/takeshape';

export const GetFooterQueryData: { footer: FooterResponse['footer'] } = {
  footer: {
    navigation: {
      sections: [
        {
          name: 'Solutions',
          items: [
            {
              name: 'Marketing',
              href: '#'
            },
            {
              name: 'Analytics',
              href: '#'
            },
            {
              name: 'Commerce',
              href: '#'
            },
            {
              name: 'Insights',
              href: '#'
            }
          ]
        },
        {
          name: 'Support',
          items: [
            {
              name: 'Contact',
              href: 'contact'
            },
            {
              name: 'Pricing',
              href: '#'
            },
            {
              name: 'Documentation',
              href: '#'
            },
            {
              name: 'Guides',
              href: '#'
            },
            {
              name: 'API Status',
              href: '#'
            }
          ]
        },
        {
          name: 'Company',
          items: [
            {
              name: 'About',
              href: '#'
            },
            {
              name: 'Blog',
              href: '#'
            },
            {
              name: 'Jobs',
              href: '#'
            },
            {
              name: 'Press',
              href: '#'
            },
            {
              name: 'Partners',
              href: '#'
            }
          ]
        },
        {
          name: 'Legal',
          items: [
            {
              name: 'Claim',
              href: '#'
            },
            {
              name: 'Privacy',
              href: '#'
            },
            {
              name: 'Terms',
              href: '#'
            }
          ]
        }
      ]
    },
    newsletter: {
      text: {
        primary: 'Subscribe to our newsletter',
        secondary: 'The latest news, articles, and resources, sent to your inbox weekly.',
        button: 'Subscribe'
      }
    }
  }
};

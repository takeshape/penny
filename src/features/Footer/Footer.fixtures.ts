import { FooterProps } from '@/features/Footer/Footer';

export const GetFooterQueryData: { footer: FooterProps } = {
  footer: {
    navigation: {
      sections: [
        {
          name: 'Solutions',
          links: [
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
          links: [
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
          links: [
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
          links: [
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

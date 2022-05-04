import type { ComponentMeta } from '@storybook/react';
import { currencyList } from 'config';
import { GetNavigationDataQuery } from 'queries';
import { isMobileMenuOpenAtom } from 'store';
import { NavigationMobileMenu } from '../NavigationMobileMenu';
import navigationJson from '../__fixtures__/navigation.json';

export default {
  title: 'Features/NavigationMobileMenu',
  component: NavigationMobileMenu,
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    },
    jotai: {
      atoms: {
        isMobileMenuOpen: isMobileMenuOpenAtom
      },
      values: {
        isMobileMenuOpen: true
      }
    },
    apolloClient: {
      mocks: [
        {
          request: {
            query: GetNavigationDataQuery
          },
          result: {
            data: {
              navigation: {
                links: navigationJson.links,
                currencies: [...currencyList]
              }
            }
          }
        }
      ]
    }
  }
} as ComponentMeta<typeof NavigationMobileMenu>;

export const Renders = (args) => <NavigationMobileMenu isMobileMenuOpen={true} {...args} />;

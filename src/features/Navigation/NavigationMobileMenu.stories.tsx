import type { ComponentMeta } from '@storybook/react';
import { isMobileMenuOpenAtom } from 'store';
import { GetNavigationDataQuery } from './Navigation.queries';
import { NavigationMobileMenu } from './NavigationMobileMenu';
import NavigationFixtures from './__fixtures__/Navigation.fixtures.json';

export default {
  title: 'Features/NavigationMobileMenu',
  component: NavigationMobileMenu,
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    },
    apolloClient: {
      mocks: [
        {
          request: {
            query: GetNavigationDataQuery
          },
          result: NavigationFixtures.GetNavigationDataQuery.result
        }
      ]
    }
  }
} as ComponentMeta<typeof NavigationMobileMenu>;

const Template = (args) => <NavigationMobileMenu {...args} />;

export const Open = Template.bind({});

Open.parameters = {
  jotai: {
    atoms: {
      isMobileMenuOpen: isMobileMenuOpenAtom
    },
    values: {
      isMobileMenuOpen: true
    }
  }
};

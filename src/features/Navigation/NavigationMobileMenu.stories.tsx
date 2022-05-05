import type { ComponentMeta } from '@storybook/react';
import { GetNavigationDataQuery } from 'queries';
import { isMobileMenuOpenAtom } from 'store';
import GetNavigationDataResult from '../__fixtures__/GetNavigationData.result.json';
import { NavigationMobileMenu } from './NavigationMobileMenu';

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
          result: GetNavigationDataResult
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

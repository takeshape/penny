import type { ComponentMeta } from '@storybook/react';
import { isMobileMenuOpenAtom } from 'store';
import NavigationFixtures from '../Navigation.fixtures.json';
import { GetNavigationDataQuery } from '../Navigation.queries';
import { MobileMenu } from './MobileMenu';

const Meta: ComponentMeta<typeof MobileMenu> = {
  title: 'Navigation / Components / MobileMenu',
  component: MobileMenu,
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
};

const Template = (args) => <MobileMenu {...args} />;

export const _Open = Template.bind({});
_Open.parameters = {
  jotai: {
    atoms: {
      isMobileMenuOpen: isMobileMenuOpenAtom
    },
    values: {
      isMobileMenuOpen: true
    }
  }
};

export default Meta;

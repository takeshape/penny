import type { ComponentMeta } from '@storybook/react';
import { isMobileMenuOpenAtom, isSearchOpenAtom } from 'store';
import NavigationFixtures from '../Navigation.fixtures.json';
import { GetNavigationDataQuery } from '../Navigation.queries';
import { Top } from './Top';

const Meta: ComponentMeta<typeof Top> = {
  title: 'Features / Navigation / Components / Top',
  component: Top,
  parameters: {
    // Allows inspecting these values since they don't do anything in this context
    jotai: {
      atoms: {
        isSearchOpen: isSearchOpenAtom,
        isMobileMenuOpen: isMobileMenuOpenAtom
      },
      values: {
        isSearchOpen: false,
        isMobileMenuOpen: false
      }
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

const Template = (args) => <Top {...args} />;

export const _Mobile = Template.bind({});
_Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
};

export const _Tablet = Template.bind({});
_Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
};

export const _Desktop = Template.bind({});
_Desktop.parameters = {};

export default Meta;

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { isMobileMenuOpenAtom, isSearchOpenAtom } from 'store';
import { Navigation } from './Navigation';
import NavigationFixtures from './Navigation.fixtures.json';
import { GetNavigationDataQuery } from './Navigation.queries';

const Meta: ComponentMeta<typeof Navigation> = {
  title: 'Features / Navigation',
  component: Navigation,
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

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const _Navigation = Template.bind({});
_Navigation.args = {};

export default Meta;

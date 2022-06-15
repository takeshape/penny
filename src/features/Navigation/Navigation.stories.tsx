import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { isMobileMenuOpenAtom, isSearchOpenAtom } from 'store';
import { Navigation } from './Navigation';
import NavigationFixtures from './Navigation.fixtures.json';

const Meta: ComponentMeta<typeof Navigation> = {
  title: 'Features / Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
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
    msw: {
      handlers: {
        newsletter: [
          graphql.query('GetNavigationData', (req, res, ctx) => {
            return res(ctx.data(NavigationFixtures.GetNavigationDataQuery.result.data));
          })
        ]
      }
    }
  }
};

const Template: ComponentStory<typeof Navigation> = () => <Navigation />;

export const _Navigation = Template.bind({});
_Navigation.args = {};

export default Meta;

import { ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import { isMobileMenuOpenAtom, isSearchOpenAtom } from 'store';
import NavigationFixtures from '../Navigation.fixtures.json';
import { Top } from './Top';

const Meta: ComponentMeta<typeof Top> = {
  title: 'Features / Navigation / Components / Top',
  component: Top,
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

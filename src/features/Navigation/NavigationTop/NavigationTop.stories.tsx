import { ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import { isMobileMenuOpenAtom, isSearchOpenAtom } from 'store';
import { GetNavigationDataQuery } from '../queries.fixtures';
import { NavigationTop } from './NavigationTop';

const Meta: ComponentMeta<typeof NavigationTop> = {
  title: 'Features / Navigation / Navigation Top',
  component: NavigationTop,
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
        navigation: [
          graphql.query('GetNavigationData', (req, res, ctx) => {
            return res(ctx.data(GetNavigationDataQuery.result.data));
          })
        ]
      }
    }
  }
};

const Template = (args) => <NavigationTop {...args} />;

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

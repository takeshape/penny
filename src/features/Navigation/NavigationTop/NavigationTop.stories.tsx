import { ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import { isMobileMenuOpenAtom, isSearchOpenAtom } from 'store';
import { navigationResponse } from '../queries.fixtures';
import { getNavigation } from '../transforms';
import { NavigationTop } from './NavigationTop';

const navigation = getNavigation(navigationResponse);

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
        auth: [
          rest.get('/api/auth/session', (req, res, ctx) => {
            return res(ctx.json({ expires: '2050-10-05T14:48:00.000Z' }));
          })
        ]
      }
    }
  }
};

const Template = (args) => <NavigationTop {...args} />;

export const _Mobile = Template.bind({});
_Mobile.args = {
  message: navigation.message,
  links: navigation.links,
  currencies: navigation.currencies
};
_Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
};

export const _Tablet = Template.bind({});
_Tablet.args = {
  message: navigation.message,
  links: navigation.links,
  currencies: navigation.currencies
};
_Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
};

export const _Desktop = Template.bind({});
_Desktop.args = {
  message: navigation.message,
  links: navigation.links,
  currencies: navigation.currencies
};
_Desktop.parameters = {};

export default Meta;

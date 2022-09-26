import { ComponentMeta, ComponentStory } from '@storybook/react';
import { currencyList } from 'config';
import { rest } from 'msw';
import { isMobileMenuOpenAtom, isSearchOpenAtom } from 'store';
import { Navigation } from './Navigation';
import { navigationResponse } from './queries.fixtures';
import { getNavigation } from './transforms';

const navigation = getNavigation(navigationResponse)!;

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
        auth: [
          rest.get('/api/auth/session', (req, res, ctx) => {
            return res(ctx.json({ expires: '2050-10-05T14:48:00.000Z' }));
          })
        ]
      }
    }
  }
};

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const _Navigation = Template.bind({});
_Navigation.args = {
  message: navigation.message,
  sections: navigation.sections,
  currencies: currencyList
};

export default Meta;

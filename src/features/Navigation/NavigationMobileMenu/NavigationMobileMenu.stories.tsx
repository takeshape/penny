import { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { isMobileMenuOpenAtom } from 'store';
import { navigationResponse } from '../queries.fixtures';
import { getNavigation } from '../transforms';
import { NavigationMobileMenu } from './NavigationMobileMenu';

const navigation = getNavigation(navigationResponse)!;

const meta: Meta<typeof NavigationMobileMenu> = {
  title: 'Features / Navigation / Navigation Mobile Menu',
  component: NavigationMobileMenu,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2'
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

type Story = StoryObj<typeof NavigationMobileMenu>;

export const _Open: Story = {
  parameters: {
    jotai: {
      atoms: {
        isMobileMenuOpen: isMobileMenuOpenAtom
      },
      values: {
        isMobileMenuOpen: true
      }
    }
  },
  args: {
    sections: navigation.sections,
    currencies: navigation.currencies
  }
};

export default meta;

import { isMobileMenuOpenAtom, isSearchOpenAtom } from '@/store';
import { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { navigationResponse } from '../queries.fixtures';
import { getNavigation } from '../transforms';
import { NavigationTop } from './NavigationTop';

const navigation = getNavigation(navigationResponse)!;

const meta: Meta<typeof NavigationTop> = {
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

type Story = StoryObj<typeof NavigationTop>;

export const _Mobile: Story = {
  args: {
    message: navigation.message,
    sections: navigation.sections,
    currencies: navigation.currencies
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
};

export const _Tablet: Story = {
  args: {
    message: navigation.message,
    sections: navigation.sections,
    currencies: navigation.currencies
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
};

export const _Desktop: Story = {
  args: {
    message: navigation.message,
    sections: navigation.sections,
    currencies: navigation.currencies
  },
  parameters: {}
};

export default meta;

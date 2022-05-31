import type { ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import { isMobileMenuOpenAtom } from 'store';
import NavigationFixtures from '../Navigation.fixtures.json';
import { MobileMenu } from './MobileMenu';

const Meta: ComponentMeta<typeof MobileMenu> = {
  title: 'Features / Navigation / Components / MobileMenu',
  component: MobileMenu,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2'
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

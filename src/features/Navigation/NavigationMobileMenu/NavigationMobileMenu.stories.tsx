import { ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import { isMobileMenuOpenAtom } from 'store';
import { GetNavigationDataQuery } from '../queries.fixtures';
import { NavigationMobileMenu } from './NavigationMobileMenu';

const Meta: ComponentMeta<typeof NavigationMobileMenu> = {
  title: 'Features / Navigation / Navigation Mobile Menu',
  component: NavigationMobileMenu,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2'
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

const Template = (args) => <NavigationMobileMenu {...args} />;

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

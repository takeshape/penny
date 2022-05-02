import type { ComponentMeta } from '@storybook/react';
import { currencyList } from 'config';
import { NavigationMobileMenu } from '../NavigationMobileMenu';
import navigationJson from '../__fixtures__/navigation.json';

export default {
  title: 'Features/NavigationMobileMenu',
  component: NavigationMobileMenu,
  decorators: [(Story) => <div className="container mx-auto w-3">{Story()}</div>],
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
} as ComponentMeta<typeof NavigationMobileMenu>;

export const Default = (args) => (
  <NavigationMobileMenu links={navigationJson.links} currencies={[...currencyList]} isMobileMenuOpen={true} {...args} />
);

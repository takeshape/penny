import type { ComponentMeta } from '@storybook/react';
import { currencyList } from 'config';
import { NavigationTop } from '../NavigationTop';
import navigationJson from '../__fixtures__/navigation.json';

export default {
  title: 'Features/NavigationTop',
  component: NavigationTop,
  decorators: [(Story) => <div className="relative z-10">{Story()}</div>]
} as ComponentMeta<typeof NavigationTop>;

export const Default = (args) => (
  <NavigationTop links={navigationJson.links} currencies={[...currencyList]} {...args} />
);

import type { ComponentMeta } from '@storybook/react';
import { NavigationTop } from './NavigationTop';

export default {
  title: 'Features/NavigationTop',
  component: NavigationTop,
  decorators: [(Story) => <div className="relative z-10">{Story()}</div>]
} as ComponentMeta<typeof NavigationTop>;

const Template = (args) => <NavigationTop {...args} />;

export const Mobile = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
};

export const Tablet = Template.bind({});

Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
};

export const Desktop = Template.bind({});

Desktop.parameters = {};

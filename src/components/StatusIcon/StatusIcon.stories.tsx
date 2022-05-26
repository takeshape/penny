import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { StatusIcon } from './StatusIcon';

const Meta: ComponentMeta<typeof StatusIcon> = {
  title: 'Components / Status Icons',
  component: StatusIcon,
  parameters: {
    layout: 'centered'
  },
  args: {
    size: 6
  }
};

const Template: ComponentStory<typeof StatusIcon> = (args) => <StatusIcon {...args} />;

export const Info = Template.bind({});
Info.args = {
  status: 'info'
};

export const Warn = Template.bind({});
Warn.args = {
  status: 'warn'
};

export const Success = Template.bind({});
Success.args = {
  status: 'success'
};

export const Error = Template.bind({});
Error.args = {
  status: 'error'
};

export default Meta;

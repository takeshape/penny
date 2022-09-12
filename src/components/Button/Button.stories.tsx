import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

const Meta: ComponentMeta<typeof Button> = {
  title: 'Components / Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    onClick: {
      action: 'Click'
    }
  }
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Button'
};

export const Clear = Template.bind({});
Clear.args = {
  color: 'clear',
  children: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  color: 'primary',
  size: 'large',
  children: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  color: 'primary',
  size: 'small',
  children: 'Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'primary',
  disabled: true,
  children: 'Button'
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  loading: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Primary.args,
  children: (
    <>
      <EnvelopeIcon className="h-4 w-4" aria-hidden="true" /> Subscribe
    </>
  )
};

export default Meta;

import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { ArgsStoryFn } from '@storybook/types';
import { useForm } from 'react-hook-form';
import { FormToggleWithLabel } from './ToggleWithLabel';

const meta: Meta<typeof FormToggleWithLabel> = {
  title: 'Components / Form / Toggle / With Label',
  component: FormToggleWithLabel,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof FormToggleWithLabel>;

const Template: ArgsStoryFn<ReactRenderer, any> = (args) => {
  const { control } = useForm();
  return <FormToggleWithLabel control={control} {...args} />;
};

export const RightLabel: Story = {
  args: {
    name: 'switch',
    labelPrimary: 'Toggle Me',
    labelSecondary: 'It‘s fun!',
    labelPosition: 'right'
  },
  render: Template
};

export const LeftLabel: Story = {
  args: {
    name: 'switch',
    labelPrimary: 'Toggle Me',
    labelSecondary: 'It‘s fun!',
    labelPosition: 'left',
    disabled: true
  },
  render: Template
};

export const Disabled: Story = {
  args: {
    name: 'switch',
    labelPrimary: 'Toggle Me',
    labelSecondary: 'It‘s fun!',
    disabled: true
  },
  render: Template
};

export default meta;

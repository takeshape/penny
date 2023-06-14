import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { ArgsStoryFn } from '@storybook/types';
import { useForm } from 'react-hook-form';
import { FormInput } from './Input';

const meta: Meta<typeof FormInput> = {
  title: 'Components / Form / Input',
  component: FormInput,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof FormInput>;

const Template: ArgsStoryFn<ReactRenderer, any> = (args) => {
  const { control } = useForm();
  return <FormInput control={control} {...args} />;
};

export const Basic: Story = {
  args: {
    id: 'input',
    name: 'input',
    label: 'Input',
    type: 'text'
  },
  render: Template
};

export const Required: Story = {
  args: {
    id: 'input',
    name: 'input',
    label: 'Input',
    type: 'text',
    rules: { required: true }
  },
  render: Template
};

export const Error: Story = {
  args: {
    id: 'input',
    label: 'Input',
    type: 'text',
    rules: { min: 6 },
    defaultValue: 'oops'
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { control, setError } = useForm();
    setError('input', { type: 'min', message: 'Needs at least 6 characters' });
    args.name = args.name ?? 'input';
    return <FormInput control={control} {...args} />;
  }
};

export const HelpText: Story = {
  args: {
    ...Basic.args,
    helpText: 'Type something in!'
  },
  render: Template
};

export const Placeholder: Story = {
  args: {
    ...Basic.args,
    placeholder: 'Type something in!'
  },
  render: Template
};

export default meta;

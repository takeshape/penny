import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { ArgsStoryFn } from '@storybook/types';
import { useForm } from 'react-hook-form';
import { FormTextarea } from './Textarea';

const meta: Meta<typeof FormTextarea> = {
  title: 'Components / Form / Textarea',
  component: FormTextarea,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof FormTextarea>;

const Template: ArgsStoryFn<ReactRenderer, any> = (args) => {
  const { control } = useForm();
  return <FormTextarea control={control} {...args} />;
};

export const Basic: Story = {
  args: {
    id: 'textarea',
    name: 'textarea',
    label: 'Textarea'
  },
  render: Template
};

export const Required: Story = {
  args: {
    ...Basic.args,
    rules: { required: true }
  },
  render: Template
};

export const Error: Story = {
  args: {
    ...Basic.args,
    rules: { required: true },
    defaultValue: ''
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { control, setError } = useForm();
    setError('textarea', { type: 'required', message: 'This field is required' });
    args.name = args.name ?? 'input';
    return <FormTextarea control={control} {...args} />;
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

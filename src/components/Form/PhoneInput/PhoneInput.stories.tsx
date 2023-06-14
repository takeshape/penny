import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { ArgsStoryFn } from '@storybook/types';
import { useForm } from 'react-hook-form';
import { FormPhoneInput } from './PhoneInput';

const meta: Meta<typeof FormPhoneInput> = {
  title: 'Components / Form / Phone Input',
  component: FormPhoneInput,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof FormPhoneInput>;

const Template: ArgsStoryFn<ReactRenderer, any> = (args) => {
  const { control } = useForm();
  return <FormPhoneInput control={control} {...args} />;
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
    defaultValue: 'oops',
    defaultErrorMessage: 'Please enter a valid phone number'
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { control, setError } = useForm();
    setError('input', { type: 'validate', message: '' });
    args.name = args.name ?? 'input';
    return <FormPhoneInput control={control} {...args} />;
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

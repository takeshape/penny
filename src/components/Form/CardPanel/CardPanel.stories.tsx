import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { ArgsStoryFn } from '@storybook/types';
import FormInput from 'components/Form/Input/Input';
import { useForm } from 'react-hook-form';
import { FormCardPanel } from './CardPanel';

const meta: Meta<typeof FormCardPanel> = {
  title: 'Components / Form / Two Column Card',
  component: FormCardPanel
};

type Story = StoryObj<typeof FormCardPanel>;

const Template: ArgsStoryFn<ReactRenderer, any> = (args) => {
  const { control } = useForm();

  return (
    <FormCardPanel {...args}>
      <FormInput
        control={control}
        name="firstName"
        id="firstName"
        label="First name"
        autoComplete="given-name"
        defaultValue=""
        type="text"
        rules={{
          required: 'This field is required'
        }}
        className="col-span-6 sm:col-span-3"
      />

      <FormInput
        control={control}
        name="lastName"
        id="lastName"
        label="Last name"
        autoComplete="family-name"
        defaultValue=""
        type="text"
        rules={{
          required: 'This field is required'
        }}
        className="col-span-6 sm:col-span-3"
      />
    </FormCardPanel>
  );
};

export const Basic: Story = {
  args: {
    primaryText: 'Profile',
    secondaryText: 'Your profile!'
  },
  render: Template
};

export const NotReady: Story = {
  args: {
    ...Basic.args,
    isReady: false
  },
  render: Template
};

export const Submitting: Story = {
  args: {
    ...Basic.args,
    isSubmitting: true
  },
  render: Template
};

export const Submitted: Story = {
  args: {
    ...Basic.args,
    isSubmitSuccessful: true
  },
  render: Template
};

export const Error: Story = {
  args: {
    ...Basic.args,
    error: 'There was an error!'
  },
  render: Template
};

export default meta;

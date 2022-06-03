import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormPhoneInput } from './PhoneInput';

const Meta: ComponentMeta<typeof FormPhoneInput> = {
  title: 'Components / Form / Phone Input',
  component: FormPhoneInput,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof FormPhoneInput> = (args) => {
  const { control } = useForm();
  return <FormPhoneInput control={control} {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  id: 'input',
  name: 'input',
  label: 'Input',
  type: 'text'
};

export const Required = Template.bind({});
Required.args = {
  id: 'input',
  name: 'input',
  label: 'Input',
  type: 'text',
  rules: { required: true }
};

export const Error: ComponentStory<typeof FormPhoneInput> = (args) => {
  const { control, setError } = useForm();
  setError('input', { type: 'validate', message: '' });
  return <FormPhoneInput control={control} name="input" {...args} />;
};
Error.args = {
  id: 'input',
  label: 'Input',
  type: 'text',
  defaultValue: 'oops',
  defaultErrorMessage: 'Please enter a valid phone number'
};

export const HelpText = Template.bind({});
HelpText.args = {
  ...Basic.args,
  helpText: 'Type something in!'
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...Basic.args,
  placeholder: 'Type something in!'
};

export default Meta;

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormInput } from './Input';

const Meta: ComponentMeta<typeof FormInput> = {
  title: 'Components / Form / Input',
  component: FormInput,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof FormInput> = (args) => {
  const { control } = useForm();
  return <FormInput control={control} {...args} />;
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

export const Error: ComponentStory<typeof FormInput> = (args) => {
  const { control, setError } = useForm();
  setError('input', { type: 'min', message: 'Needs at least 6 characters' });
  args.name = args.name ?? 'input';
  return <FormInput control={control} {...args} />;
};
Error.args = {
  id: 'input',
  label: 'Input',
  type: 'text',
  rules: { min: 6 },
  defaultValue: 'oops'
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

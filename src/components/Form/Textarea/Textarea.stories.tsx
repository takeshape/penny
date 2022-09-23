import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormTextarea } from './Textarea';

const Meta: ComponentMeta<typeof FormTextarea> = {
  title: 'Components / Form / Textarea',
  component: FormTextarea,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof FormTextarea> = (args) => {
  const { control } = useForm();
  return <FormTextarea control={control} {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  id: 'textarea',
  name: 'textarea',
  label: 'Textarea'
};

export const Required = Template.bind({});
Required.args = {
  ...Basic.args,
  rules: { required: true }
};

export const Error: ComponentStory<typeof FormTextarea> = (args) => {
  const { control, setError } = useForm();
  setError('textarea', { type: 'required', message: 'This field is required' });
  args.name = args.name ?? 'input';
  return <FormTextarea control={control} {...args} />;
};
Error.args = {
  ...Basic.args,
  rules: { required: true },
  defaultValue: ''
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

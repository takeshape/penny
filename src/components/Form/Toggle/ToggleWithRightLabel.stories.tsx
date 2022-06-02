import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormToggleWithRightLabel } from './ToggleWithRightLabel';

const Meta: ComponentMeta<typeof FormToggleWithRightLabel> = {
  title: 'Components / Form / Toggle / With Right Label',
  component: FormToggleWithRightLabel,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof FormToggleWithRightLabel> = (args) => {
  const { control } = useForm();
  return <FormToggleWithRightLabel control={control} {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  id: 'switch',
  name: 'switch',
  labelPrimary: 'Toggle Me',
  labelSecondary: 'It‘s fun!'
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'switch',
  name: 'switch',
  labelPrimary: 'Toggle Me',
  labelSecondary: 'It‘s fun!',
  disabled: true
};

export default Meta;

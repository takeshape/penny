import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormToggleWithLabel } from './ToggleWithLabel';

const Meta: ComponentMeta<typeof FormToggleWithLabel> = {
  title: 'Components / Form / Toggle / With Label',
  component: FormToggleWithLabel,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof FormToggleWithLabel> = (args) => {
  const { control } = useForm();
  return <FormToggleWithLabel control={control} {...args} />;
};

export const RightLabel = Template.bind({});
RightLabel.args = {
  id: 'switch',
  name: 'switch',
  labelPrimary: 'Toggle Me',
  labelSecondary: 'It‘s fun!',
  labelPosition: 'right'
};

export const LeftLabel = Template.bind({});
LeftLabel.args = {
  id: 'switch',
  name: 'switch',
  labelPrimary: 'Toggle Me',
  labelSecondary: 'It‘s fun!',
  labelPosition: 'left',
  disabled: true
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

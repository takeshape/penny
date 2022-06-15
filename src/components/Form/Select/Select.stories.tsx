import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormSelect } from './Select';

const Meta: ComponentMeta<typeof FormSelect> = {
  title: 'Components / Form / Select',
  component: FormSelect,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <div className="grid grid-cols-6 gap-6">{Story()}</div>
      </div>
    )
  ]
};

const Template: ComponentStory<typeof FormSelect> = (args) => {
  const { control } = useForm();
  return <FormSelect control={control} {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  id: 'select',
  name: 'select',
  label: 'Select',
  options: [
    {
      key: 'foo',
      value: 'foo',
      title: 'Foo'
    },
    {
      key: 'bar',
      value: 'bar',
      title: 'Bar'
    }
  ],
  className: 'col-span-6'
};

export const DefaultBlank = Template.bind({});
DefaultBlank.args = {
  id: 'select',
  name: 'select',
  label: 'Select',
  defaultValue: '',
  options: [
    {
      key: 'blank',
      value: '',
      title: '--Make your selection--',
      disabled: true
    },
    {
      key: 'foo',
      value: 'foo',
      title: 'Foo'
    },
    {
      key: 'bar',
      value: 'bar',
      title: 'Bar'
    }
  ],
  className: 'col-span-6'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  id: 'select',
  name: 'select',
  label: 'Select',
  options: [
    {
      key: 'foo',
      value: 'foo',
      title: 'Foo'
    },
    {
      key: 'bar',
      value: 'bar',
      title: 'Bar'
    }
  ],
  className: 'col-span-6'
};

export const Required = Template.bind({});
Required.args = {
  id: 'select',
  name: 'select',
  label: 'Select',
  rules: { required: true },
  options: [
    {
      key: 'foo',
      value: 'foo',
      title: 'Foo'
    },
    {
      key: 'bar',
      value: 'bar',
      title: 'Bar'
    }
  ],
  className: 'col-span-6'
};

export const HelpText = Template.bind({});
HelpText.args = {
  ...Basic.args,
  helpText: 'Select something!'
};

export default Meta;

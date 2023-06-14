import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { ArgsStoryFn } from '@storybook/types';
import { useForm } from 'react-hook-form';
import { FormSelect } from './Select';

const meta: Meta<typeof FormSelect> = {
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

type Story = StoryObj<typeof FormSelect>;

const Template: ArgsStoryFn<ReactRenderer, any> = (args) => {
  const { control } = useForm();
  return <FormSelect control={control} {...args} />;
};

export const Basic: Story = {
  args: {
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
  },
  render: Template
};

export const DefaultBlank: Story = {
  args: {
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
  },
  render: Template
};

export const Disabled: Story = {
  args: {
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
  },
  render: Template
};

export const Required: Story = {
  args: {
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
  },
  render: Template
};

export const HelpText: Story = {
  args: {
    ...Basic.args,
    helpText: 'Select something!'
  },
  render: Template
};

export default meta;

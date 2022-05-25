import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from './Alert';

const Meta: ComponentMeta<typeof Alert> = {
  title: 'Components / Alert',
  component: Alert,
  parameters: {
    layout: 'centered'
  },
  decorators: [(Story) => <div className="w-screen max-w-md">{Story()}</div>]
};

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  primaryText: 'Something Informational',
  secondaryText: 'Here is some useful info.',
  status: 'info'
};

export const Warn = Template.bind({});
Warn.args = {
  primaryText: 'Something Concerning',
  secondaryText: 'Here is some concerning info.',
  status: 'warn'
};

export const Success = Template.bind({});
Success.args = {
  primaryText: 'Something Succesful',
  secondaryText: 'Here is some successful info!',
  status: 'success'
};

export const Error = Template.bind({});
Error.args = {
  primaryText: 'Something Awful',
  secondaryText: 'Here is some terrible news.',
  status: 'error'
};

export const WithList = Template.bind({});
WithList.args = {
  primaryText: 'Something Awful',
  secondaryText: ['Here is some terrible news.', 'And something else bad.'],
  status: 'error'
};

export const WithActions = Template.bind({});
WithActions.args = {
  primaryText: 'Order completed',
  secondaryText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  status: 'success',
  actions: [
    {
      text: 'View status',
      onClick: () => {}
    },
    {
      text: 'Dismiss',
      onClick: () => {}
    }
  ]
};

export default Meta;

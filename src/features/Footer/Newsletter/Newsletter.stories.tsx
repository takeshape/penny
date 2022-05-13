import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Newsletter from './Newsletter';

const Meta: ComponentMeta<typeof Newsletter> = {
  title: 'Footer / Components / Newsletter',
  component: Newsletter
};

const Template: ComponentStory<typeof Newsletter> = (args) => <Newsletter {...args} />;

export const _Newsletter = Template.bind({});
_Newsletter.args = {
  onSubmit: action('Newsletter Submit'),
  text: {
    primary: 'Subscribe to our newsletter',
    secondary: 'The latest news, articles, and resources, sent to your inbox weekly.',
    button: 'Subscribe'
  }
};

export default Meta;

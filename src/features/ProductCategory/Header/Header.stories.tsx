import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './Header';

const Meta: ComponentMeta<typeof Header> = {
  title: 'Product Category / Components / Header',
  component: Header,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export default Meta;

export const _Header = Template.bind({});
_Header.args = {
  header: {
    text: {
      primary: 'Workspace',
      secondary:
        "The secret to a tidy desk? Don't get rid of anything, just put it in really really nice looking containers."
    }
  }
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Stars from './Stars';

const Meta: ComponentMeta<typeof Stars> = {
  title: 'Components / Stars',
  component: Stars,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    scale: {
      type: 'number'
    }
  }
};

const Template: ComponentStory<typeof Stars> = (args) => <Stars {...args} />;

export const _Stars = Template.bind({});
_Stars.args = {
  rating: 3
};

export default Meta;

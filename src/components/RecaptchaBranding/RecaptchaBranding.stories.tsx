import { ComponentMeta, ComponentStory } from '@storybook/react';
import RecaptchaBranding from './RecaptchaBranding';

const Meta: ComponentMeta<typeof RecaptchaBranding> = {
  title: 'Components / RecaptchaBranding',
  component: RecaptchaBranding,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    scale: {
      type: 'number'
    }
  }
};

const Template: ComponentStory<typeof RecaptchaBranding> = (args) => <RecaptchaBranding />;

export const _RecaptchaBranding = Template.bind({});

export default Meta;

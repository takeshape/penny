import { Meta, StoryObj } from '@storybook/react';
import RecaptchaBranding from './RecaptchaBranding';

const meta: Meta<typeof RecaptchaBranding> = {
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

type Story = StoryObj<typeof RecaptchaBranding>;

export const _RecaptchaBranding: Story = {};

export default meta;

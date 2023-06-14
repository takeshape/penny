import { Meta, StoryObj } from '@storybook/react';
import { Contact } from './Contact';

const meta: Meta<typeof Contact> = {
  title: 'Features / Contact',
  component: Contact
};

type Story = StoryObj<typeof Contact>;

export const _Contact: Story = {
  args: {
    text: {
      primary: 'Contact sales',
      secondary:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      button: "Let's talk"
    }
  }
};

export default meta;

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Contact from './Contact';

const Meta: ComponentMeta<typeof Contact> = {
  title: 'Features / Contact',
  component: Contact,
  argTypes: {
    onSubmit: {
      action: 'Submit'
    }
  }
};

const Template: ComponentStory<typeof Contact> = (args) => <Contact {...args} />;

export const _Contact = Template.bind({});
_Contact.args = {
  text: {
    primary: 'Contact sales',
    secondary:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    button: "Let's talk"
  }
};

export default Meta;

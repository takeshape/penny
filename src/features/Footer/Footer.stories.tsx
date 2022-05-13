import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';
import { _Navigation } from './Navigation/Navigation.stories';
import { _Newsletter } from './Newsletter/Newsletter.stories';
import { _Social } from './Social/Social.stories';

const Meta: ComponentMeta<typeof Footer> = {
  title: 'Footer',
  component: Footer
};

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const _Footer = Template.bind({});
_Footer.args = {
  newsletter: _Newsletter.args,
  navigation: _Navigation.args,
  social: _Social.args
};

export default Meta;

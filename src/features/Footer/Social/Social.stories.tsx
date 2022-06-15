import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as Icons from 'components/Icons/Icons';
import Social from './Social';

const Meta: ComponentMeta<typeof Social> = {
  title: 'Features / Footer / Components / Social',
  component: Social
};

const Template: ComponentStory<typeof Social> = (args) => <Social {...args} />;

export const _Social = Template.bind({});
_Social.args = {
  channels: [
    {
      name: 'Facebook',
      href: '#',
      icon: Icons.Facebook
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Icons.Instagram
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Icons.Twitter
    },
    {
      name: 'GitHub',
      href: '#',
      icon: Icons.GitHub
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: Icons.Dribbble
    }
  ]
};

export default Meta;

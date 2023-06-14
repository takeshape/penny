import { Meta, StoryObj } from '@storybook/react';
import * as Icons from 'components/Icons/Icons';
import { Social } from './Social';

const meta: Meta<typeof Social> = {
  title: 'Features / Footer / Components / Social',
  component: Social
};

type Story = StoryObj<typeof Social>;

export const _Social: Story = {
  args: {
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
  }
};

export default meta;

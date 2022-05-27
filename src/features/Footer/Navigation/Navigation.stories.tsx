import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Navigation from './Navigation';

const Meta: ComponentMeta<typeof Navigation> = {
  title: 'Features / Footer / Components / Navigation',
  component: Navigation
};

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const _Navigation = Template.bind({});
_Navigation.args = {
  sections: [
    {
      name: 'Solutions',
      items: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' }
      ]
    },
    {
      name: 'Support',
      items: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' }
      ]
    },
    {
      name: 'Company',
      items: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' }
      ]
    },
    {
      name: 'Legal',
      items: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' }
      ]
    }
  ]
};

export default Meta;

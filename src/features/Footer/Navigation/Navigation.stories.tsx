import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Navigation from './Navigation';

const Meta: ComponentMeta<typeof Navigation> = {
  title: 'Footer / Components / Navigation',
  component: Navigation
};

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const _Navigation = Template.bind({});
_Navigation.args = {
  sections: {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' }
    ],
    support: [
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Status', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' }
    ]
  }
};

export default Meta;

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

const Meta: ComponentMeta<typeof Breadcrumbs> = {
  title: 'Components / Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

export const _Breadcrumbs = Template.bind({});
_Breadcrumbs.args = {
  breadcrumbs: [
    {
      id: '1',
      name: 'First',
      href: '#'
    },
    {
      id: '2',
      name: 'Second',
      href: '#'
    },
    {
      id: '3',
      name: 'Third',
      href: '#'
    }
  ]
};

export default Meta;

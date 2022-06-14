import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Policies } from './Policies';
import { policies } from './Policies.fixtures';

const Meta: ComponentMeta<typeof Policies> = {
  title: 'Features / Product Page / Components / Policies',
  component: Policies,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Policies> = (args) => <Policies {...args} />;

export const _Policies = Template.bind({});
_Policies.args = {
  policies
};

export default Meta;

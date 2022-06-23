import { ComponentMeta, ComponentStory } from '@storybook/react';
import { productPagePolicies } from '../fixtures';
import { Policies } from './Policies';

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
  policies: productPagePolicies
};

export default Meta;

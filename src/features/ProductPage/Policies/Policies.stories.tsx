import { ComponentMeta, ComponentStory } from '@storybook/react';
import { takeshapeProductResponse } from '../queries.fixtures';
import { getPolicies } from '../transforms';
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
  policies: getPolicies(takeshapeProductResponse)
};

export default Meta;

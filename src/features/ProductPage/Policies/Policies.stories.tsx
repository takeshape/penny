import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductPagePolicies } from './Policies';
import { policies } from './Policies.fixtures';

const Meta: ComponentMeta<typeof ProductPagePolicies> = {
  title: 'Features / Product Page / Components / Policies',
  component: ProductPagePolicies,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductPagePolicies> = (args) => <ProductPagePolicies {...args} />;

export const _Policies = Template.bind({});
_Policies.args = {
  policies
};

export default Meta;

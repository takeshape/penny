import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PoliciesLoading } from './PoliciesLoading';

const Meta: ComponentMeta<typeof PoliciesLoading> = {
  title: 'Features / Product Page / Components / Policies / Loading',
  component: PoliciesLoading
};

const Template: ComponentStory<typeof PoliciesLoading> = () => <PoliciesLoading />;

export const Loading = Template.bind({});

export default Meta;

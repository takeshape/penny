import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TrustpilotLoading } from './TrustpilotLoading';

const Meta: ComponentMeta<typeof TrustpilotLoading> = {
  title: 'Features / Product Page / Components / Trustpilot Loading',
  component: TrustpilotLoading
};

const Template: ComponentStory<typeof TrustpilotLoading> = (args) => <TrustpilotLoading />;

export const _TrustpilotLoading = Template.bind({});

export default Meta;

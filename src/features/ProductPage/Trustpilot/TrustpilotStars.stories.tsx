import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TrustpilotStars } from './TrustpilotStars';

const Meta: ComponentMeta<typeof TrustpilotStars> = {
  title: 'Features / Product Page / Components / Trustpilot Stars',
  component: TrustpilotStars
};

const Template: ComponentStory<typeof TrustpilotStars> = (args) => <TrustpilotStars {...args} />;

export const _TrustpilotStars = Template.bind({});

_TrustpilotStars.args = {
  stars: 4.7,
  width: 200
};

export default Meta;

import { Meta, StoryObj } from '@storybook/react';
import { TrustpilotStars } from './TrustpilotStars';

const meta: Meta<typeof TrustpilotStars> = {
  title: 'Features / Product Page / Components / Trustpilot Stars',
  component: TrustpilotStars
};

type Story = StoryObj<typeof TrustpilotStars>;

export const _TrustpilotStars: Story = {
  args: {
    stars: 4.7,
    width: 200
  }
};

export default meta;

import { Meta, StoryObj } from '@storybook/react';
import { trustpilotPageData, trustpilotPageDataEmpty } from '../fixtures';
import { Trustpilot } from './Trustpilot';

const meta: Meta<typeof Trustpilot> = {
  title: 'Features / Product Page / Components / Trustpilot',
  component: Trustpilot
};

type Story = StoryObj<typeof Trustpilot>;

export const Loading: Story = {
  args: {
    error: false,
    currentPageData: null,
    currentPage: 1,
    handleNext: () => {},
    handlePrevious: () => {}
  }
};

export const Error: Story = {
  args: {
    ...Loading.args,
    error: true
  }
};

export const Success: Story = {
  args: {
    ...Loading.args,
    currentPageData: trustpilotPageData
  }
};

export const Empty: Story = {
  args: {
    ...Loading.args,
    currentPageData: trustpilotPageDataEmpty
  }
};

export default meta;

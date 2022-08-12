import { ComponentMeta, ComponentStory } from '@storybook/react';
import { trustpilotPageData, trustpilotPageDataEmpty, trustpilotSummary, trustpilotSummaryEmpty } from '../fixtures';
import { Trustpilot } from './Trustpilot';

const Meta: ComponentMeta<typeof Trustpilot> = {
  title: 'Features / Product Page / Components / Trustpilot',
  component: Trustpilot
};

const Template: ComponentStory<typeof Trustpilot> = (args) => <Trustpilot {...args} />;

export const Loading = Template.bind({});

Loading.args = {
  trustpilotSummary: trustpilotSummary,
  error: false,
  currentPageData: null,
  currentPage: 1,
  handleNext: () => {},
  handlePrevious: () => {}
};

export const Error = Template.bind({});

Error.args = {
  ...Loading.args,
  error: true
};

export const Success = Template.bind({});

Success.args = {
  ...Loading.args,
  trustpilotSummary: trustpilotSummary,
  currentPageData: trustpilotPageData
};

export const Empty = Template.bind({});

Empty.args = {
  ...Loading.args,
  trustpilotSummary: trustpilotSummaryEmpty,
  currentPageData: trustpilotPageDataEmpty
};

export default Meta;

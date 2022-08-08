import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';

const Meta: ComponentMeta<typeof ErrorBoundaryFallback> = {
  title: 'Components / Error / Error Boundary Fallback',
  component: ErrorBoundaryFallback
};

const Template: ComponentStory<typeof ErrorBoundaryFallback> = (args) => {
  return <ErrorBoundaryFallback {...args} />;
};

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  headline: 'Headline',
  subhead: 'Subhead',
  body: 'Body'
};

export default Meta;

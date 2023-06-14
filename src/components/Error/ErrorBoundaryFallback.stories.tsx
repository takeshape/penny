import { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';

const meta: Meta<typeof ErrorBoundaryFallback> = {
  title: 'Components / Error / Error Boundary Fallback',
  component: ErrorBoundaryFallback
};

export default meta;

type Story = StoryObj<typeof ErrorBoundaryFallback>;

export const Default: Story = {};

export const Custom: Story = {
  args: {
    headline: 'Headline',
    subhead: 'Subhead',
    body: 'Body'
  }
};

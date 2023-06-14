import { Meta, StoryObj } from '@storybook/react';
import { GetFooterQueryData } from '../Footer.fixtures';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Features / Footer / Components / Navigation',
  component: Navigation
};

type Story = StoryObj<typeof Navigation>;

export const _Navigation: Story = {
  args: {
    sections: GetFooterQueryData.footer.navigation!.sections
  }
};

export default meta;

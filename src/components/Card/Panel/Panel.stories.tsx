import { Meta, StoryObj } from '@storybook/react';
import { CardPanel } from './Panel';

const meta: Meta<typeof CardPanel> = {
  title: 'Components / Card / Panel',
  component: CardPanel
};

export default meta;

type Story = StoryObj<typeof CardPanel>;

export const Basic: Story = {
  args: {
    primaryText: 'Random',
    secondaryText: 'A random panel card.',
    children: (
      <>
        <div>Random</div>
        <div>Stuff</div>
        <div>In Card</div>
      </>
    )
  }
};

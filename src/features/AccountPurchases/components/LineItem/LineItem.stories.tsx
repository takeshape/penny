import { Meta, StoryObj } from '@storybook/react';
import { getLineItem } from '../../transforms';
import { ResponseOrderLineItem } from '../../types';
import { LineItem } from './LineItem';
import fixture from './LineItem.fixtures.json';

const meta: Meta<typeof LineItem> = {
  title: 'Features / Account Purchases / Components / LineItem',
  component: LineItem,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof LineItem>;

export const _LineItem: Story = {
  args: {
    lineItem: getLineItem(fixture as ResponseOrderLineItem)
  }
};

export default meta;

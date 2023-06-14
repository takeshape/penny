import { Meta, StoryObj } from '@storybook/react';
import { storefrontCollectionComponent } from '../fixtures';
import { Collection } from './Collection';

const meta: Meta<typeof Collection> = {
  title: 'Features / Storefront / Components / Collection',
  component: Collection
};

type Story = StoryObj<typeof Collection>;

export const _Collection: Story = {
  args: storefrontCollectionComponent
};

export default meta;

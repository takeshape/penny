import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { getLineItem, Shopify_LineItem } from '../../transforms';
import { LineItem } from './LineItem';
import fixture from './LineItem.fixtures.json';

const Meta: ComponentMeta<typeof LineItem> = {
  title: 'Features / Account Purchases / Components / LineItem',
  component: LineItem,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof LineItem> = (args) => <LineItem {...args} />;

export const _LineItem = Template.bind({});
_LineItem.args = {
  lineItem: getLineItem(fixture as Shopify_LineItem)
};

export default Meta;

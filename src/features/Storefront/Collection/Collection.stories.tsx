import { ComponentMeta, ComponentStory } from '@storybook/react';
import { storefrontCollectionComponent } from '../fixtures';
import { Collection } from './Collection';

const Meta: ComponentMeta<typeof Collection> = {
  title: 'Features / Storefront / Components / Collection',
  component: Collection
};

const Template: ComponentStory<typeof Collection> = (args) => <Collection {...args} />;

export const _Collection = Template.bind({});
_Collection.args = storefrontCollectionComponent;

export default Meta;

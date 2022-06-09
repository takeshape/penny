import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Storefront from './Storefront';

const Meta: ComponentMeta<typeof Storefront> = {
  title: 'Features / Storefront',
  component: Storefront
};

const Template: ComponentStory<typeof Storefront> = () => <Storefront />;

export const _Storefront = Template.bind({});

export default Meta;

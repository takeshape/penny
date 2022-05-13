import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductGrid from './ProductGrid';

const Meta: ComponentMeta<typeof ProductGrid> = {
  title: 'Product Category / Components / Product Grid',
  component: ProductGrid,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductGrid> = (args) => <ProductGrid {...args} />;

export default Meta;

export const _ProductGrid = Template.bind({});
_ProductGrid.args = {
  products: [
    {
      id: 1,
      name: 'Organize Basic Set (Walnut)',
      price: '$149',
      rating: 5,
      reviewCount: 38,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
      imageAlt: 'TODO',
      href: '#'
    },
    {
      id: 2,
      name: 'Organize Pen Holder',
      price: '$15',
      rating: 5,
      reviewCount: 18,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
      imageAlt: 'TODO',
      href: '#'
    },
    {
      id: 3,
      name: 'Organize Sticky Note Holder',
      price: '$15',
      rating: 5,
      reviewCount: 14,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
      imageAlt: 'TODO',
      href: '#'
    },
    {
      id: 4,
      name: 'Organize Phone Holder',
      price: '$15',
      rating: 4,
      reviewCount: 21,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
      imageAlt: 'TODO',
      href: '#'
    }
  ]
};

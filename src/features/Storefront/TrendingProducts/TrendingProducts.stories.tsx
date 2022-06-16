import type { ComponentMeta, ComponentStory } from '@storybook/react';
import TrendingProducts from './TrendingProducts';

const Meta: ComponentMeta<typeof TrendingProducts> = {
  title: 'Features / Storefront / Components / Trending Products',
  component: TrendingProducts
};

const Template: ComponentStory<typeof TrendingProducts> = (args) => <TrendingProducts {...args} />;

export const _TrendingProducts = Template.bind({});
_TrendingProducts.args = {
  trendingProducts: [
    {
      id: 1,
      name: 'Machined Pen',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' }
      ]
    },
    {
      id: 2,
      name: 'Earthen Mug',
      color: 'Matte Black',
      price: '$28',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-02.jpg',
      imageAlt: 'Black porcelain mug with modern square handle and natural clay accents on rim and bottom.',
      availableColors: [
        { name: 'Matte Black', colorBg: '#4B5563' },
        { name: 'Natural', colorBg: '#FEF3C7' }
      ]
    },
    {
      id: 3,
      name: 'Leatherbound Daily Journal Set',
      color: 'Natural',
      price: '$50',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-03.jpg',
      imageAlt: 'Natural leather journal with brass disc binding and three paper refill sets.',
      availableColors: [
        { name: 'Natural', colorBg: '#FEF3C7' },
        { name: 'Black', colorBg: '#1F2937' },
        { name: 'Brown', colorBg: '#7C2D12' }
      ]
    },
    {
      id: 4,
      name: 'Leatherbound Daily Journal',
      color: 'Black',
      price: '$50',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-04.jpg',
      imageAlt: 'Black leather journal with brass disc binding.',
      availableColors: [
        { name: 'Black', colorBg: '#1F2937' },
        { name: 'Brown', colorBg: '#7C2D12' },
        { name: 'Natural', colorBg: '#FEF3C7' }
      ]
    }
  ]
};

export default Meta;

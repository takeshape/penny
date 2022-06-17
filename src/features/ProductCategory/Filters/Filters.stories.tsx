import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Filters } from './Filters';

const Meta: ComponentMeta<typeof Filters> = {
  title: 'Features / Product Category / Components / Filters',
  component: Filters,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template: ComponentStory<typeof Filters> = (args) => <Filters {...args} />;

export default Meta;

export const _Filters = Template.bind({});
_Filters.args = {
  setFilters: action('Set filters'),
  clearAllFilters: action('Clear all filters'),
  setSortOption: action('Set sort option'),
  filters: {
    price: [
      { value: '0', label: '$0 - $25', checked: false },
      { value: '25', label: '$25 - $50', checked: false },
      { value: '50', label: '$50 - $75', checked: false },
      { value: '75', label: '$75+', checked: false }
    ],
    color: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false }
    ],
    size: [
      { value: 'xs', label: 'XS', checked: false },
      { value: 's', label: 'S', checked: true },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      { value: '2xl', label: '2XL', checked: false }
    ],
    category: [
      { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: false },
      { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
      { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false }
    ]
  },
  sortOptions: [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false }
  ]
};

/* Commerce */
export const showCurrencySelector = true;
export const currencyList = ['CAD', 'USD', 'AUD', 'EUR', 'GBP'] as const;
export const defaultCurrency = 'USD';

/* Cart */
export const cartLocalStorageKey = process.env.NEXT_PUBLIC_CART_LOCAL_STORAGE_KEY ?? 'cart';

/* Products */
export const defaultProductImage = {
  height: 480,
  url: '/images/default-product-image.webp',
  width: 480,
  altText: 'Default product image'
};
export const productReviewsPerPage = 3;
export const trustpilotReviewsPerPage = 3;

/* Collections */
export const collectionsPageSize = 12;

/* Product Options - LUTs to decorate options */
export const productOptions = {
  color: {
    white: { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400', colorBg: '#ffffff' },
    gray: { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400', colorBg: '#333333' },
    black: { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900', colorBg: '#111827' },
    red: { name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-300', colorBg: 'red' },
    'heather gray': { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400', colorBg: '#777777' }
  },
  size: {
    xxs: { name: 'XXS', description: 'The very smallest size' },
    xs: { name: 'XS', description: 'A fairly small size' },
    s: { name: 'S', description: 'A small size' },
    m: { name: 'M', description: 'Just about right for everybody' },
    l: { name: 'L', description: 'Getting bigger' },
    xl: { name: 'XL', description: 'And bigger...' },
    '2xl': { name: '2XL', description: 'Whoa, so big' },
    '3xl': { name: '3XL', description: 'No way!' }
  }
};

/* Checkout */
export const signedInCheckout = false;

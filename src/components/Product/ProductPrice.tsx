import { ProductPriceOption } from 'types/product';
import classNames from 'utils/classNames';
import { formatPrice } from 'utils/text';

export interface ProductPriceProps {
  price: ProductPriceOption;
  hasStock: boolean;
  size: 'small' | 'large';
}

export const ProductPrice = ({ price, hasStock, size }: ProductPriceProps) => {
  const { currencyCode, amount } = price;

  const wrapperClass = classNames(size === 'small' && 'text-2xl', size === 'large' && 'text-3xl', 'text-gray-900');

  if (hasStock) {
    return (
      <p className={wrapperClass}>{formatPrice(currencyCode, amount)}</p>
    )
  }

  return (
    <p className={`${wrapperClass} flex items-center`}>
      <span className="text-gray-300 line-through">{formatPrice(currencyCode, amount)}</span>
      <span className="text-gray-500 text-sm uppercase font-bold ml-4">Out of stock</span>
    </p>
  );
};

export default ProductPrice;

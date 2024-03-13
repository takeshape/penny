import { ProductPriceOption } from '@/types/product';
import classNames from '@/utils/classNames';
import { formatPrice } from '@/utils/text';

export interface ProductPriceProps {
  price: ProductPriceOption;
  isAvailable: boolean;
  size: 'small' | 'large';
}

export const ProductPrice = ({ price, isAvailable, size }: ProductPriceProps) => {
  const { currencyCode, amount } = price;

  const wrapperClass = classNames(size === 'small' && 'text-2xl', size === 'large' && 'text-3xl', 'text-body-900');

  if (isAvailable) {
    return (
      <p className={wrapperClass} data-testid="product-price">
        {formatPrice(currencyCode, amount)}
      </p>
    );
  }

  return (
    <p className={`${wrapperClass} flex items-center`}>
      <span className="text-body-300 line-through">{formatPrice(currencyCode, amount)}</span>
      <span className="text-body-500 text-sm uppercase font-bold ml-4">Out of stock</span>
    </p>
  );
};

export default ProductPrice;

import { useEffect, useMemo, useState } from 'react';
import { Product } from 'types/product';
import { useVariantOption } from 'utils/hooks/useVariantOption';
import { getVariant } from 'utils/products';
import { isNotNullish } from 'utils/types';

export type ProductHookOptions = {
  product: Pick<Product, 'variantOptions' | 'hasStock' | 'variants'>;
};

export function useProduct({ product }: ProductHookOptions) {
  const { variantOptions, variants, hasStock } = product;

  const initialVariant = useMemo(() => {
    if (hasStock) {
      return variants.find((variant) => variant.available);
    }
    return variants[0];
  }, [hasStock, variants]);

  if (!initialVariant) {
    throw new Error('Could not find initial variant');
  }

  const [setSelectedColor, selectedColor] = useVariantOption({
    name: 'Color',
    variant: initialVariant,
    options: variantOptions
  });

  const [setSelectedSize, selectedSize] = useVariantOption({
    name: 'Size',
    variant: initialVariant,
    options: variantOptions
  });

  const selections = useMemo(
    () => [selectedColor.selected, selectedSize.selected].filter(isNotNullish),
    [selectedColor, selectedSize]
  );

  const selectedVariant = useMemo(() => {
    if (selections.length) {
      return getVariant(product.variants, selections);
    }
    return product.variants[0];
  }, [product, selections]);

  if (!selectedVariant) {
    throw new Error('No selected variant found');
  }

  const [selectedPrice, setSelectedPrice] = useState(selectedVariant.prices[0]);

  useEffect(() => {
    const price =
      selectedVariant.prices.find((price) => price.intervalId === selectedPrice.intervalId) ??
      selectedVariant.prices[0];
    setSelectedPrice(price);
  }, [selectedPrice.intervalId, selectedVariant]);

  return {
    setSelectedColor,
    selectedColor,
    setSelectedSize,
    selectedSize,
    setSelectedPrice,
    selectedPrice,
    selectedVariant,
    selections
  };
}

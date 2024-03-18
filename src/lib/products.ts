import { ProductVariant, ProductVariantSelection } from '@/types/product';

export function getVariant(variants: ProductVariant[], options: ProductVariantSelection[]) {
  return variants.find((variant) => {
    let isVariant = true;

    for (const opt of options) {
      isVariant = isVariant && variant.options.findIndex((o) => o.name === opt.name && o.value === opt.value) > -1;
    }

    return isVariant;
  });
}

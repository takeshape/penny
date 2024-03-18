import { isNotNullish } from '@/lib/types';
import { ProductLineItemAttribute, ProductVariant, ProductVariantSelection } from '@/types/product';
import { LineItemAttributes } from '@/types/takeshape';

export function getProductLineItemAttributes(
  lineItemProperties: Pick<LineItemAttributes, 'attributes'> | null
): ProductLineItemAttribute[] | null {
  if (!lineItemProperties) {
    return null;
  }

  return lineItemProperties.attributes
    .map(({ key, values }) => ({
      key,
      values: values?.map((v) => v?.value).filter(isNotNullish) ?? null
    }))
    .filter(isNotNullish);
}

export function getVariant(variants: ProductVariant[], options: ProductVariantSelection[]) {
  return variants.find((variant) => {
    let isVariant = true;

    for (const opt of options) {
      isVariant = isVariant && variant.options.findIndex((o) => o.name === opt.name && o.value === opt.value) > -1;
    }

    return isVariant;
  });
}

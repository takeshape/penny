import { ProductLineItemAttribute } from 'types/product';
import { LineItemAttributes } from 'types/takeshape';
import { isNotNullish } from 'utils/types';

export function getProductLineItemAttributes(
  lineItemProperties?: LineItemAttributes
): ProductLineItemAttribute[] | null {
  if (!lineItemProperties) {
    return null;
  }

  return lineItemProperties.attributes
    .map(({ key, values }) => ({
      key,
      values: values?.map((v) => v && v.value).filter(isNotNullish) ?? null
    }))
    .filter(isNotNullish);
}

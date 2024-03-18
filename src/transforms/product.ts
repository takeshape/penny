import { isNotNullish } from '@/lib/types';
import { ProductLineItemAttribute } from '@/types/product';
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

import { ProductLineItemAttribute } from 'types/product';
import { LineItemAttributes } from 'types/takeshape';

export function getProductLineItemAttributes(lineItemProperties?: LineItemAttributes): ProductLineItemAttribute[] {
  if (!lineItemProperties) {
    return null;
  }

  return lineItemProperties.attributes.map(({ key, values }) => ({
    key,
    values: values?.map(({ value }) => value) ?? null
  }));
}

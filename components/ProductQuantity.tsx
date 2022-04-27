import type { ChangeEventHandler } from 'react';
import { Flex, Input, Label } from 'theme-ui';

export interface ProductQuantityProps {
  id: string;
  value: number;
  onChange: ChangeEventHandler;
}

export const ProductQuantity = ({ id, value, onChange }: ProductQuantityProps) => {
  const inputId = `${id}-quantity`;
  return (
    <Flex variant="styles.product.quantity" sx={{ flexWrap: 'wrap' }}>
      <Label variant="styles.inputLabel" htmlFor={inputId}>
        Quantity
      </Label>
      <Input id={inputId} type="number" min={1} value={value ?? 1} onChange={onChange} />
    </Flex>
  );
};

export default ProductQuantity;

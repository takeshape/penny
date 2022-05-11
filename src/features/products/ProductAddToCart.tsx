import { useAtom, useSetAtom } from 'jotai';
import orderBy from 'lodash-es/orderBy';
import { useEffect, useState } from 'react';
import { addToCart } from 'services/cart/jotai';
import { cartItemsAtom, cartTimeoutMsAtom, isCartOpenAtom } from 'store';
import { Box, Button, Flex, Label, Radio } from 'theme-ui';
import { Stripe_Product } from 'types/takeshape';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';

const showCartTimeout = 3000;
const oneTimePurchase = 'one-time';
const recurringPurchase = 'recurring';
const intervalOrderMap = ['day', 'week', 'month', 'year'];

const ProductPaymentToggle = ({ purchaseType, onChange }) => {
  return (
    <Box sx={{ margin: '1rem 0' }}>
      <Label sx={{ display: 'flex', alignItems: 'center', marginBottom: '.5rem', fontSize: '1em' }}>
        <Radio value={oneTimePurchase} checked={purchaseType === oneTimePurchase} onChange={onChange} />
        One-Time Purchase
      </Label>
      <Label sx={{ display: 'flex', alignItems: 'center', fontSize: '1em' }}>
        <Radio value={recurringPurchase} checked={purchaseType === recurringPurchase} onChange={onChange} />
        Subscribe &amp; Save!
      </Label>
    </Box>
  );
};

const AddToCartButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button sx={{ width: '100%', margin: '1rem 0' }} type="button" onClick={onClick}>
    Add to Cart
  </Button>
);

function useAddToCart(product: Stripe_Product) {
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom);
  const setCartTimeoutMs = useSetAtom(cartTimeoutMsAtom);
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);

  const { prices } = product;
  const oneTimePayment = prices?.find((p) => !p.recurring);

  const recurringPayments = orderBy(
    prices?.filter((p) => p.recurring),
    [(v) => intervalOrderMap.indexOf(v.recurring.interval), 'recurring.intervalCount'],
    ['asc', 'asc']
  );
  const findPriceById = (priceId) => prices.find((p) => p.id === priceId);

  const defaultPurchaseType = oneTimePayment ? oneTimePurchase : recurringPurchase;
  const defaultPrice = oneTimePayment ? oneTimePayment : recurringPayments?.[0];

  const [purchaseType, setPurchaseType] = useState(defaultPurchaseType);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(defaultPrice);

  useEffect(() => {
    setPrice(defaultPrice);
  }, [defaultPrice]);

  useEffect(() => {
    setPurchaseType(defaultPurchaseType);
  }, [defaultPurchaseType]);

  const handleUpdatePurchaseType = (event) => {
    const { value } = event.target;

    setPurchaseType(value);

    if (value === oneTimePurchase) {
      setPrice(oneTimePayment);
    }

    if (value === recurringPurchase) {
      setPrice(recurringPayments[0]);
    }
  };

  const handleUpdateQuantity = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleUpdateRecurring = (event) => {
    setPurchaseType(recurringPurchase);
    setPrice(findPriceById(event.target.value));
  };

  const handleAddToCart = () => {
    addToCart(cartItems, setCartItems, { ...product, price, quantity });

    if (!isCartOpen) {
      setCartTimeoutMs(showCartTimeout);
      setIsCartOpen(true);
    }
  };

  return {
    price,
    quantity,
    purchaseType,
    oneTimePayment,
    recurringPayments,
    handleUpdateRecurring,
    handleUpdatePurchaseType,
    handleUpdateQuantity,
    handleAddToCart
  };
}

export interface ProductAddToCartProps {
  product: Stripe_Product;
}

const ProductAddToCart = ({ product }: ProductAddToCartProps) => {
  const {
    price,
    quantity,
    purchaseType,
    oneTimePayment,
    recurringPayments,
    handleUpdatePurchaseType,
    handleUpdateQuantity,
    handleAddToCart
  } = useAddToCart(product);
  return (
    <Box>
      {oneTimePayment && recurringPayments.length ? (
        <ProductPaymentToggle purchaseType={purchaseType} onChange={handleUpdatePurchaseType} />
      ) : null}

      <Flex sx={{ alignItems: 'flex-end', gap: '1rem' }}>
        <ProductQuantity id={product.id} value={quantity} onChange={handleUpdateQuantity} />
        <ProductPrice quantity={quantity} price={price} />
      </Flex>

      <AddToCartButton onClick={handleAddToCart} />
    </Box>
  );
};

export default ProductAddToCart;

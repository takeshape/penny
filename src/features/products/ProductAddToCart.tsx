import { addToCartAtom, isCartOpenAtom } from 'features/Cart/store';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Box, Button, Flex, Label, Radio } from 'theme-ui';
import { Product } from 'types/product';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';

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

function useAddToCart(product: Product) {
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom);
  const addToCart = useSetAtom(addToCartAtom);

  // For now just use the first variant
  const productVariant = product.variants[0];

  const { hasOneTimePurchaseOption, hasSubscriptionPurchaseOption } = product;
  const { prices } = productVariant;

  const oneTimePayment = prices?.find((p) => p.intervalCount === 0);
  const recurringPayments = prices?.filter((p) => p.intervalCount > 0);
  const findPriceById = (priceId) => prices.find((p) => p.subscriptionId === priceId);

  const defaultPurchaseType = hasOneTimePurchaseOption ? oneTimePurchase : recurringPurchase;
  const defaultPrice = hasOneTimePurchaseOption ? oneTimePayment : recurringPayments?.[0];

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
    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      href: product.url,
      unitAmount: price.amount,
      currency: price.currencyCode,
      quantity,
      imageSrc: product.featuredImage.url,
      imageAlt: `Picture of ${product.name}`,
      interval: price.interval,
      intervalCount: price.intervalCount,
      data: {
        product,
        productVariant,
        price
      }
    });

    if (!isCartOpen) {
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
  product: Product;
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

import { useEffect, useRef, useCallback } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';
import { Flex, Box, Divider, Heading, Close, IconButton, Button, Text, Grid, Image } from '@theme-ui/components';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from '@apollo/client';
import { formatPrice } from 'lib/utils/text';
import { getCheckoutPayload } from 'lib/utils/checkout';
import { CreateMyCheckoutSession } from 'lib/queries';
import { useCart } from 'lib/cart';
import getStripe from 'lib/utils/stripe';
import ProductImage from './product/image';
import { ProductPrice, Quantity } from './product/add-to-cart';

export const CartIcon = () => {
  const {
    items,
    isCartReady,
    actions: { toggleCart }
  } = useCart();

  const cartQuantity = items.reduce((q, i) => q + i.quantity, 0);

  const handleCartButton = (event) => {
    event.preventDefault();
    toggleCart();
  };

  return (
    <>
      {isCartReady ? (
        <Flex
          sx={{ alignItems: 'center', pointer: 'cursor', ':hover': { color: 'primary' } }}
          onClick={handleCartButton}
        >
          <IconButton aria-label="Toggle cart preview">
            <BsCart3 size={25} title="Cart" />
          </IconButton>
          {cartQuantity && cartQuantity > 0 && (
            <Text as="div" sx={{ fontWeight: 'bold', width: '1rem', textAlign: 'center' }}>
              {cartQuantity}
            </Text>
          )}
        </Flex>
      ) : (
        ''
      )}
    </>
  );
};

const CartItem = ({ product, onChangeQuantity, onClickRemove }) => {
  return (
    <Box variant="styles.cart.item" sx={{ width: '100%', padding: '0 1rem' }}>
      <Flex variant="styles.cart.itemGrid" sx={{ width: '100%', gap: '1rem', alignItems: 'flex-start' }}>
        <Box sx={{ flex: '0 1 6rem' }}>
          <ProductImage maxHeight="6rem" images={product.images} />
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <div>
            <strong>{product.name}</strong>
          </div>
          <Flex sx={{ gap: '1rem', alignItems: 'flex-end', margin: '1rem 0' }}>
            <Quantity id={product.id} value={product.quantity} onChange={onChangeQuantity} />
            <Box sx={{ fontSize: '.8em' }}>
              <ProductPrice price={product.price} quantity={product.quantity} />
            </Box>
          </Flex>
        </Box>
        <IconButton sx={{ flex: '0 1 28px', ':hover': { color: 'primary' } }} onClick={onClickRemove}>
          <FiTrash2 size={28} />
        </IconButton>
      </Flex>
    </Box>
  );
};

export const CartSidebar = () => {
  const {
    items,
    isCartOpen,
    isCartReady,
    timeout,
    actions: { removeFromCart, updateCartItem, closeCart }
  } = useCart();
  const sidebarRef = useRef<HTMLDivElement>();
  const { user, loginWithRedirect } = useAuth0();
  const [setCheckoutPayload, { data: checkoutData }] = useMutation(CreateMyCheckoutSession);
  const cartCurrency = items?.[0]?.price?.currency ?? '';

  const cartTotal = items
    .map((item) => item.price.unitAmount * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const handleRemove = (itemIndex) => {
    removeFromCart(itemIndex);
  };

  const handleUpdate = (itemIndex, itemPatch) => {
    updateCartItem(itemIndex, itemPatch);
  };

  const handleCheckout = async () => {
    if (!user) {
      loginWithRedirect({ appState: { returnTo: '/_checkout' } });
      return;
    }
    setCheckoutPayload({
      variables: getCheckoutPayload(items, window.location.href)
    });
  };

  useEffect(() => {
    const doCheckout = async () => {
      const stripe = await getStripe();
      stripe.redirectToCheckout({
        sessionId: checkoutData.session.id
      });
    };
    if (checkoutData?.session) {
      doCheckout();
    }
  }, [checkoutData]);

  const handleClose = useCallback(
    (event) => {
      event.preventDefault();
      closeCart();
    },
    [closeCart]
  );

  const clearToggle = useCallback(() => {
    clearTimeout(timeout);
  }, [timeout]);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    sidebar.addEventListener('mouseenter', clearToggle);
    return () => {
      sidebar.removeEventListener('mouseenter', clearToggle);
    };
  }, [clearToggle]);

  return (
    <Box as="aside" ref={sidebarRef}>
      {isCartReady ? (
        <Flex
          style={{
            transform: isCartOpen ? 'translateX(0)' : 'translateX(103%)'
          }}
          variant="layout.cart"
        >
          <Flex sx={{ flexDirection: 'column', flex: '1 1 auto' }}>
            <Flex
              sx={{ backgroundColor: 'white', padding: '1rem', marginBottom: '2rem', position: 'sticky', top: '0' }}
            >
              <Heading sx={{ margin: 0, flex: '1 1 auto' }}>Your Cart</Heading>
              <Close sx={{ pointer: 'cursor', ':hover': { color: 'primary' } }} onClick={handleClose} />
            </Flex>
            <Flex variant="cart.itemList" sx={{ flex: '1 1 auto', flexDirection: 'column' }}>
              {items.map((product, index) => (
                <CartItem
                  key={`${product.id}_${index}`}
                  product={product}
                  onChangeQuantity={(event) => handleUpdate(index, { quantity: Number(event.target.value) })}
                  onClickRemove={() => handleRemove(index)}
                />
              ))}
            </Flex>
            <Flex
              sx={{
                backgroundColor: 'white',
                padding: '1rem',
                position: 'sticky',
                bottom: '0',
                gap: '2rem',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button disabled={items && items.length === 0} onClick={handleCheckout} sx={{ width: '100%' }}>
                Checkout
              </Button>
              {cartTotal ? (
                <Box sx={{ flex: '1 1 50%' }}>
                  <Text as="p" variant="lineHeading">
                    Subtotal
                  </Text>
                  <Text>{formatPrice(cartCurrency, cartTotal)}</Text>
                </Box>
              ) : null}
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Heading>Cart is loading...</Heading>
      )}
    </Box>
  );
};

export default CartSidebar;

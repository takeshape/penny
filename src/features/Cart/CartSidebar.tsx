import { useMutation } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import ClientOnly from 'components/ClientOnly';
import { useAtom } from 'jotai';
import { CreateMyCheckoutSession } from 'queries';
import { useCallback, useEffect, useRef } from 'react';
import { removeFromCart, updateCartItem } from 'services/cart/jotai';
import getStripe from 'services/stripe/getStripe';
import { cartItemsAtom, cartTimeoutMsAtom, isCartOpenAtom } from 'store';
import { Box, Button, Close, Flex, Heading, Text } from 'theme-ui';
import { getCheckoutPayload } from 'utils/checkout';
import { formatPrice } from 'utils/text';
import CartItem from './CartItem';

export const CartSidebar = () => {
  const [items, setCartItems] = useAtom(cartItemsAtom);
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom);
  const [cartTimeoutMs, setCartTimeoutMs] = useAtom(cartTimeoutMsAtom);
  const sidebarRef = useRef<HTMLDivElement>();
  const { user, loginWithRedirect } = useAuth0();
  const [setCheckoutPayload, { data: checkoutData }] = useMutation(CreateMyCheckoutSession);

  const cartCurrency = items?.[0]?.price?.currency ?? '';

  const cartTotal = items
    .map((item) => item.price.unit_amount * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const handleRemove = (itemIndex) => {
    removeFromCart(items, setCartItems, itemIndex);
  };

  const handleUpdate = (itemIndex, itemPatch) => {
    updateCartItem(items, setCartItems, itemIndex, itemPatch);
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
      setIsCartOpen(false);
    },
    [setIsCartOpen]
  );

  const timeoutRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (cartTimeoutMs > 0) {
      timeoutRef.current = setTimeout(() => {
        setCartTimeoutMs(0);
        setIsCartOpen(false);
      }, cartTimeoutMs);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [cartTimeoutMs, setIsCartOpen, setCartTimeoutMs]);

  const clearToggle = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [timeoutRef]);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    sidebar.addEventListener('mouseenter', clearToggle);
    return () => {
      sidebar.removeEventListener('mouseenter', clearToggle);
    };
  }, [clearToggle]);

  return (
    <Box as="aside" ref={sidebarRef}>
      <Flex
        style={{
          transform: isCartOpen ? 'translateX(0)' : 'translateX(103%)'
        }}
        variant="layout.cart"
      >
        <Flex sx={{ flexDirection: 'column', flex: '1 1 auto' }}>
          <Flex sx={{ backgroundColor: 'white', padding: '1rem', marginBottom: '2rem', position: 'sticky', top: '0' }}>
            <Heading sx={{ margin: 0, flex: '1 1 auto' }}>Your Cart</Heading>
            <Close sx={{ pointer: 'cursor', ':hover': { color: 'primary' } }} onClick={handleClose} />
          </Flex>
          <ClientOnly>
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
              <Button disabled={Boolean(items && items.length === 0)} onClick={handleCheckout} sx={{ width: '100%' }}>
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
          </ClientOnly>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CartSidebar;

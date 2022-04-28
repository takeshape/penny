import { BsCart3 } from 'react-icons/bs';
import useCart from 'services/cart/useCart';
import { Flex, IconButton, Text } from 'theme-ui';

export const CartNavigationIcon = () => {
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

export default CartNavigationIcon;

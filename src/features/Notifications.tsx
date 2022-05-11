import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { cartCheckoutResultAtom } from 'store';
import { Alert, Box, Close } from 'theme-ui';

export const Notifications = () => {
  const [state, setState] = useState({ visible: false, fade: true });
  const [cartCheckoutResult, setCartCheckoutResult] = useAtom(cartCheckoutResultAtom);

  let stateTimeout;
  let resultTimeout;

  const handleClose = () => {
    if (stateTimeout) {
      clearTimeout(stateTimeout);
    }
    if (resultTimeout) {
      clearTimeout(resultTimeout);
    }

    setState({ visible: false, fade: false });
    setCartCheckoutResult('');
  };

  useEffect(() => {
    if (cartCheckoutResult) {
      setState({ visible: true, fade: true });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      stateTimeout = setTimeout(() => setState({ visible: false, fade: true }), 5000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      resultTimeout = setTimeout(() => setCartCheckoutResult(''), 5500);
    }
  }, [cartCheckoutResult]);

  let message;

  if (cartCheckoutResult === 'success') {
    message = 'Successfully checked out, your cart has been cleared.';
  }

  if (cartCheckoutResult === 'canceled') {
    message = 'Checkout canceled, your cart has been saved.';
  }

  return (
    <Box
      as="aside"
      variant="layout.snackbar"
      style={{
        opacity: state.visible ? 1 : 0,
        transition: state.fade ? `opacity 0.4s ease-in-out` : ''
      }}
    >
      <Alert variant="secondary">
        {message} <Close ml="auto" mr={-2} onClick={handleClose} />
      </Alert>
    </Box>
  );
};

export default Notifications;

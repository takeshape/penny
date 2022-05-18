import { useMutation } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { signIn, useSession } from 'next-auth/react';
import { CreateMyCheckoutSession } from 'queries';
import { useCallback, useEffect } from 'react';
import { cartItemsAtom, cartQuantityAtom } from 'services/cart/store';
import getStripe from 'services/stripe/getStripe';
import { getCheckoutPayload } from 'utils/checkout';

export const Checkout = () => {
  const { status } = useSession();

  const quantity = useAtomValue(cartQuantityAtom);
  const items = useAtomValue(cartItemsAtom);

  const [setCheckoutPayload, { data: checkoutData }] = useMutation(CreateMyCheckoutSession);

  const handleCheckout = useCallback(() => {
    if (status !== 'authenticated') {
      signIn(undefined, { callbackUrl: '/_checkout' });
      return;
    }

    setCheckoutPayload({
      variables: getCheckoutPayload(items, window.location.href)
    });
  }, [items, setCheckoutPayload, status]);

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

  return (
    <button
      onClick={handleCheckout}
      disabled={quantity === 0}
      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 w-full cursor-pointer"
    >
      Checkout
    </button>
  );
};

export default Checkout;

import { loadStripe } from '@stripe/stripe-js/pure';
import { stripePublishableKey } from 'config';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripePublishableKey);
  }
  return stripePromise;
};

export default getStripe;

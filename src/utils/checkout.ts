import { CartItem } from 'services/cart/store';
import { Stripe_Price } from 'types/takeshape';

const getRedirectUrl = (redirectUrl) => {
  redirectUrl = redirectUrl ?? window.location.pathname;

  if (redirectUrl.startsWith('http')) {
    return redirectUrl;
  }

  return new URL(redirectUrl, window.location.origin).href;
};

export const getCheckoutPayload = (items: CartItem[], redirectUrl?: string) => {
  const payload = {
    lineItems: items?.map((i) => ({
      price: (i.data.price as Stripe_Price).id,
      quantity: i.quantity
    })),
    mode: items?.some((i) => (i.data.price as Stripe_Price).recurring) ? 'subscription' : 'payment',
    redirectUrl: getRedirectUrl(redirectUrl)
  };

  return payload;
};

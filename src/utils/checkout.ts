const getRedirectUrl = (redirectUrl) => {
  redirectUrl = redirectUrl ?? window.location.pathname;

  if (redirectUrl.startsWith('http')) {
    return redirectUrl;
  }

  return new URL(redirectUrl, window.location.origin).href;
};

export const getCheckoutPayload = (items, redirectUrl) => {
  const payload = {
    lineItems: items?.map((i) => ({
      price: i.price.id,
      quantity: i.quantity
    })),
    mode: items?.some((i) => i.price.recurring) ? 'subscription' : 'payment',
    redirectUrl: getRedirectUrl(redirectUrl)
  };

  return payload;
};

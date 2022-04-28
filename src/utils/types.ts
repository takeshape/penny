import type { Stripe_Invoiceitem } from 'types/takeshape';

export function getSingle<T>(param?: T | T[]): T | undefined {
  if (Array.isArray(param)) {
    return param[0];
  }
  return param;
}

export function isStripeInvoiceitemArray(maybe: unknown): maybe is Stripe_Invoiceitem[] {
  return (maybe as Stripe_Invoiceitem[])?.[0]?.object === 'invoiceitem';
}

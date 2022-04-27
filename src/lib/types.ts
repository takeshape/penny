import type { Stripe_Invoiceitem } from 'types/takeshape';

export function isStripeInvoiceitemArray(maybe: unknown): maybe is Stripe_Invoiceitem[] {
  return (maybe as Stripe_Invoiceitem[])?.[0]?.object === 'invoiceitem';
}

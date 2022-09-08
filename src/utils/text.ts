import { locale } from 'config';
import { ProductPriceOption } from 'types/product';

const pluralRules = new Intl.PluralRules(locale);

export function pluralizeText(count: number, singular: string, plural: string) {
  const grammaticalNumber = pluralRules.select(count);
  switch (grammaticalNumber) {
    case 'one':
      return singular;
    case 'other':
      return count + ' ' + plural;
    default:
      throw new Error('Unknown: ' + grammaticalNumber);
  }
}

export function formatPrice(currency: string, amountInCents: number) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amountInCents / 100);
}

export function formatRechargePrice(currency: string, price: number | string, quantity: number) {
  const priceAsNumber = typeof price === 'number' ? price : parseFloat(price);
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(priceAsNumber * quantity);
}

export function formatDiscount(price: ProductPriceOption) {
  if (!price.hasDiscount) {
    return '';
  }

  switch (price.discountType) {
    case 'PRICE':
    case 'FIXED_AMOUNT': {
      const amountOff = price.amountBeforeDiscount - price.amount;
      return formatPrice(price.currencyCode, amountOff);
    }
    case 'PERCENTAGE':
    default: {
      return `${price.discountAmount}%`;
    }
  }
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

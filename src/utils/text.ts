import { locale } from '../config';

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

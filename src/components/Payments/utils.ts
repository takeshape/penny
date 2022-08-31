import { differenceInMonths, isAfter, lastDayOfMonth } from 'date-fns';
import { CreditCard } from 'types/paymentMethod';
import {
  AlipayIcon,
  AmexIcon,
  DinersClubIcon,
  DiscoverIcon,
  GenericIcon,
  MastercardIcon,
  PaypalIcon,
  VisaIcon
} from './CreditCardIcons/index';

export function getCreditCardIcon(brand: string) {
  brand = brand.toLowerCase();

  if (brand.startsWith('visa')) {
    return VisaIcon;
  }

  if (brand.startsWith('amex')) {
    return AmexIcon;
  }

  if (brand.startsWith('disc')) {
    return DiscoverIcon;
  }

  if (brand.startsWith('diners')) {
    return DinersClubIcon;
  }

  if (brand.startsWith('ali')) {
    return AlipayIcon;
  }

  if (brand.startsWith('master')) {
    return MastercardIcon;
  }

  if (brand.startsWith('pay')) {
    return PaypalIcon;
  }

  return GenericIcon;
}

export function getIsExpired({ expiryMonth, expiryYear }: Pick<CreditCard, 'expiryMonth' | 'expiryYear'>): boolean {
  const lastDay = lastDayOfMonth(new Date(expiryYear, expiryMonth - 1, 1));
  return isAfter(new Date(), lastDay);
}

export function getIsExpiringSoon({
  expiryMonth,
  expiryYear
}: Pick<CreditCard, 'expiryMonth' | 'expiryYear'>): boolean {
  const lastDay = lastDayOfMonth(new Date(expiryYear, expiryMonth - 1, 1));
  return differenceInMonths(lastDay, new Date()) < 3;
}

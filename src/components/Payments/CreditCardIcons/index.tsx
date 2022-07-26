import NextImage from 'components/NextImage';
import alipay from './alipay.svg';
import amex from './amex.svg';
import diners from './diners.svg';
import discover from './discover.svg';
import generic from './generic.svg';
import mastercard from './mastercard.svg';
import paypal from './paypal.svg';
import visa from './visa.svg';

function getIcon(img) {
  return function Icon(props) {
    return <NextImage {...img} {...props} />;
  };
}

export const AlipayIcon = getIcon(alipay);
export const AmexIcon = getIcon(amex);
export const DinersClubIcon = getIcon(diners);
export const DiscoverIcon = getIcon(discover);
export const GenericIcon = getIcon(generic);
export const MastercardIcon = getIcon(mastercard);
export const PaypalIcon = getIcon(paypal);
export const VisaIcon = getIcon(visa);

import { GetMyLoyaltyCardQueryResponse } from 'types/takeshape';
import { LoyaltyCard } from './types';

export function getLoyaltyCard(response?: GetMyLoyaltyCardQueryResponse | null): LoyaltyCard | null {
  if (!response?.loyaltyCard) {
    return null;
  }

  return {
    code: response.loyaltyCard.code ?? '',
    stats: {
      balance: response.loyaltyCard.loyalty_card?.balance ?? 0,
      points: response.loyaltyCard.loyalty_card?.points ?? 0
    },
    qr: response.loyaltyCard.assets?.qr
      ? {
          id: response.loyaltyCard.assets.qr.id ?? '',
          url: response.loyaltyCard.assets.qr.url ?? ''
        }
      : null
  };
}

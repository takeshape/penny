import { Voucherify_LoyaltyCardAsset, Voucherify_LoyaltyCardStats } from 'types/takeshape';
import { NonNullablePath } from 'types/util';

export type LoyaltyCard = {
  code: string;
  stats: Pick<Voucherify_LoyaltyCardStats, 'balance' | 'points'>;
  qr: {
    url: NonNullablePath<Voucherify_LoyaltyCardAsset, ['url']>;
    id: NonNullablePath<Voucherify_LoyaltyCardAsset, ['id']>;
  } | null;
};

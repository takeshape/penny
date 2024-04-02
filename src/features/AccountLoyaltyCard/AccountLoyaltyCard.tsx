'use client';

import CardPanel from '@/components/Card/Panel/Panel';
import Image from '@/components/NextImage';
import { GetMyLoyaltyCardQuery } from '@/features/AccountLoyaltyCard/queries';
import { getLoyaltyCard } from '@/features/AccountLoyaltyCard/transforms';
import { useAuthenticatedQuery } from '@/lib/takeshape';
import { GetMyLoyaltyCardQueryResponse } from '@/types/takeshape';
import { LoyaltyCard } from './types';

export const AccountLoyaltyCard = () => {
  const { transformedData: loyaltyCard } = useAuthenticatedQuery<GetMyLoyaltyCardQueryResponse, never, LoyaltyCard>(
    GetMyLoyaltyCardQuery,
    { transform: { data: getLoyaltyCard } }
  );

  if (!loyaltyCard) {
    return null;
  }

  return (
    <CardPanel primaryText="Penny Membership">
      <div>
        <div>{loyaltyCard.qr && <Image src={loyaltyCard.qr.url} alt="QR Code" height={84} width={84} />}</div>
      </div>
      <dl>
        <dt className="font-bold text-body-900 text-sm uppercase">Member Code</dt>
        <dd className="font-mono text-body-900 mb-1 tracking-widest">{loyaltyCard.code}</dd>
        <dt className="font-bold text-body-900 text-sm uppercase">Balance</dt>
        <dd className="font-mono text-body-900 mb-1 tracking-widest">{loyaltyCard.stats.balance} points</dd>
      </dl>
    </CardPanel>
  );
};

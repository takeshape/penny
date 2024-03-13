import CardPanel from '@/components/Card/Panel/Panel';
import Image from '@/components/NextImage';
import { LoyaltyCard } from './types';

export type AccountLoyaltyCardProps = {
  loyaltyCard: LoyaltyCard;
};

export const AccountLoyaltyCard = ({ loyaltyCard }: AccountLoyaltyCardProps) => {
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

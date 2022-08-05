import CardPanel from 'components/Card/Panel/Panel';
import Image from 'components/NextImage';
import { GetMyLoyaltyCardQueryResponse } from 'types/takeshape';

export type AccountLoyaltyCardProps = GetMyLoyaltyCardQueryResponse['loyaltyCard'];

export const AccountLoyaltyCard = ({ code, loyalty_card, assets }: AccountLoyaltyCardProps) => {
  return (
    <CardPanel primaryText="Deluxe ™️ Membership">
      <div>
        <div>
          <Image src={assets.qr.url} alt="QR Code" height={84} width={84} />
        </div>
      </div>
      <dl>
        <dt className="font-bold text-body-900 text-sm uppercase">Member Code</dt>
        <dd className="font-mono text-body-900 mb-1 tracking-widest">{code}</dd>
        <dt className="font-bold text-body-900 text-sm uppercase">Balance</dt>
        <dd className="font-mono text-body-900 mb-1 tracking-widest">{loyalty_card.balance} points</dd>
      </dl>
    </CardPanel>
  );
};

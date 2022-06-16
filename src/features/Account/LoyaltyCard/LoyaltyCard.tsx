import CardPanel from 'components/Card/Panel/Panel';
import Image from 'components/NextImage';
import { SetRequired } from 'type-fest';
import { Voucherify_LoyaltyCard } from 'types/takeshape';

export type AccountLoyaltyCardProps = SetRequired<Voucherify_LoyaltyCard, 'code' | 'loyalty_card' | 'assets'>;

export const AccountLoyaltyCard = ({ code, loyalty_card, assets }: AccountLoyaltyCardProps) => {
  return (
    <CardPanel primaryText="Deluxe ™️ Membership">
      <div>
        <div>
          <Image src={assets.qr.url} alt="QR Code" height={84} width={84} />
        </div>
      </div>
      <dl>
        <dt className="font-bold text-sm uppercase">Member Code</dt>
        <dd className="font-mono mb-1 tracking-widest">{code}</dd>
        <dt className="font-bold text-sm uppercase">Balance</dt>
        <dd className="font-mono mb-1 tracking-widest">{loyalty_card.balance} points</dd>
      </dl>
    </CardPanel>
  );
};

export default AccountLoyaltyCard;

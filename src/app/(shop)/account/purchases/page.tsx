import { AccountPurchaseList } from '@/features/AccountPurchases/AccountPurchaseList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Purchases'
};

export default function AccountPurchasesPage() {
  return <AccountPurchaseList />;
}

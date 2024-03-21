import { AccountSubscriptions } from '@/features/AccountSubscriptions/AccountSubscriptions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subscriptions'
};

export default function AccountSubscriptionsPage() {
  return <AccountSubscriptions />;
}

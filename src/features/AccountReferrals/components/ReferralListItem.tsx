import { CheckCircleIcon, ClockIcon } from '@heroicons/react/outline';

export interface ReferralListItemProps {
  email: string;
  sent: Date;
  earned: boolean;
}

export const ReferralListItem = ({ email, sent, earned }: ReferralListItemProps) => (
  <div className="flex gap-1 justify-start align-middle">
    {earned ? (
      <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
    ) : (
      <ClockIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
    )}
    <p className="text-mainText-600">
      Referred{' '}
      <a href={`mailto:${email}`} className="text-accent-600">
        {email}
      </a>{' '}
      on {sent.toLocaleDateString()}
    </p>
  </div>
);

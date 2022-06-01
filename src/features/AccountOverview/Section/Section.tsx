import { PropsWithChildren } from 'react';

export interface AccountSectionProps {
  primaryText: string;
  secondaryText?: string;
}

export const AccountSection = ({ primaryText, secondaryText, children }: PropsWithChildren<AccountSectionProps>) => {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">{primaryText}</h3>
            {secondaryText && <p className="mt-1 text-sm text-gray-600">{secondaryText}</p>}
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">{children}</div>
      </div>
    </div>
  );
};

export default AccountSection;

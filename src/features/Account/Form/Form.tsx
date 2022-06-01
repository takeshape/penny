import type { PropsWithChildren, ReactEventHandler } from 'react';
import type { AccountOverviewFormActionsProps } from '../FormActions/FormActions';
import AccountOverviewFormActions from '../FormActions/FormActions';

export interface AccountFormProps extends AccountOverviewFormActionsProps {
  primaryText: string;
  secondaryText?: string;
  onSubmit: ReactEventHandler;
}

export const AccountForm = ({
  primaryText,
  secondaryText,
  onSubmit,
  children,
  ...props
}: PropsWithChildren<AccountFormProps>) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">{primaryText}</h3>
            {secondaryText && <p className="mt-1 text-sm text-gray-500">{secondaryText}</p>}
          </div>

          {children}
        </div>
        <AccountOverviewFormActions {...props} />
      </div>
    </form>
  );
};

export default AccountForm;

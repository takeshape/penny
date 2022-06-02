import type { PropsWithChildren, ReactEventHandler } from 'react';
import type { FormTwoColumnCardActionsProps } from './TwoColumnCardActions';
import FormTwoColumnCardActions from './TwoColumnCardActions';

export interface FormTwoColumnCardProps extends FormTwoColumnCardActionsProps {
  primaryText: string;
  secondaryText?: string;
  onSubmit: ReactEventHandler;
}

export const FormTwoColumnCard = ({
  primaryText,
  secondaryText,
  onSubmit,
  children,
  ...props
}: PropsWithChildren<FormTwoColumnCardProps>) => {
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
        <FormTwoColumnCardActions {...props} />
      </div>
    </form>
  );
};

export default FormTwoColumnCard;

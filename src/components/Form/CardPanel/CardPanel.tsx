import type { PropsWithChildren, ReactEventHandler } from 'react';
import type { FormCardPanelActionsProps } from './CardPanelActions';
import FormCardPanelActions from './CardPanelActions';

export interface FormCardPanelProps extends FormCardPanelActionsProps {
  primaryText: string;
  secondaryText?: string;
  onSubmit: ReactEventHandler;
}

export const FormCardPanel = ({
  primaryText,
  secondaryText,
  onSubmit,
  children,
  ...props
}: PropsWithChildren<FormCardPanelProps>) => {
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
        <FormCardPanelActions {...props} />
      </div>
    </form>
  );
};

export default FormCardPanel;

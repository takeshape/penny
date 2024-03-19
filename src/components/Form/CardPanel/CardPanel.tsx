import { PropsWithChildren, ReactEventHandler } from 'react';
import FormCardPanelActions, { FormCardPanelActionsProps } from './CardPanelActions';

export type FormCardPanelProps = {
  primaryText: string;
  secondaryText?: string;
  onSubmit: ReactEventHandler;
} & FormCardPanelActionsProps;

export const FormCardPanel = ({
  primaryText,
  secondaryText,
  onSubmit,
  children,
  ...props
}: PropsWithChildren<FormCardPanelProps>) => {
  return (
    <form onSubmit={onSubmit} data-testid="account-form">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-background py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-body-900">{primaryText}</h3>
            {secondaryText && <p className="mt-1 text-sm text-body-500">{secondaryText}</p>}
          </div>

          {children}
        </div>
        <FormCardPanelActions {...props} />
      </div>
    </form>
  );
};

export default FormCardPanel;

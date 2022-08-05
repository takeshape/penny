import { PropsWithChildren } from 'react';

export interface CardPanelProps extends PropsWithChildren<{}> {
  primaryText: string;
  secondaryText?: string;
}

export const CardPanel = ({ primaryText, secondaryText, children }: CardPanelProps) => {
  return (
    <div className="shadow sm:rounded-md sm:overflow-hidden">
      <div className="bg-background text-mainText-900 py-6 space-y-6 sm:px-4 sm:p-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-mainText-900">{primaryText}</h3>
          {secondaryText && <p className="mt-1 text-sm text-mainText-500">{secondaryText}</p>}
        </div>

        {children}
      </div>
    </div>
  );
};

export default CardPanel;

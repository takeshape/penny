import { PropsWithChildren } from 'react';

export interface CardPanelProps extends PropsWithChildren<{}> {
  primaryText: string;
  secondaryText?: string;
}

export const CardPanel = ({ primaryText, secondaryText, children }: CardPanelProps) => {
  return (
    <div className="shadow sm:rounded-md sm:overflow-hidden">
      <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">{primaryText}</h3>
          {secondaryText && <p className="mt-1 text-sm text-gray-500">{secondaryText}</p>}
        </div>

        {children}
      </div>
    </div>
  );
};

export default CardPanel;

import StatusIcon, { StatusIconProps } from '@/components/StatusIcon/StatusIcon';
import classNames from '@/lib/classNames';
import { ReactEventHandler } from 'react';

export type AlertActionProps = {
  text: string;
  onClick: ReactEventHandler;
  status: StatusIconProps['status'];
};

export const AlertAction = ({ text, status, onClick }: AlertActionProps) => {
  const colorClasses = classNames(
    status === 'error' && 'bg-red-50 text-red-800 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600',
    status === 'info' && 'bg-blue-50 text-blue-800 hover:bg-blue-100 focus:ring-offset-blue-50 focus:ring-blue-600',
    status === 'success' &&
      'bg-green-50 text-green-800 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600',
    status === 'warn' &&
      'bg-yellow-50 text-yellow-800 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus:ring-yellow-600'
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${colorClasses} px-2 py-1.5 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2`}
    >
      {text}
    </button>
  );
};

export const AlertActions = ({ actions, status }: Required<Pick<AlertProps, 'status' | 'actions'>>) => {
  return (
    <div className="mt-4">
      <div className="-mx-2 -my-1.5 flex ">
        {actions.map((action, i) => (
          <AlertAction key={i} status={status} {...action} />
        ))}
      </div>
    </div>
  );
};

export type AlertProps = {
  status: StatusIconProps['status'];
  primaryText: string;
  secondaryText?: string | string[];
  actions?: {
    text: string;
    onClick: ReactEventHandler;
  }[];
};

export const Alert = ({ status, primaryText, secondaryText, actions }: AlertProps) => {
  const backgroundColor = classNames(
    status === 'error' && 'bg-red-50',
    status === 'info' && 'bg-blue-50',
    status === 'success' && 'bg-green-50',
    status === 'warn' && 'bg-yellow-50'
  );

  const primaryTextColor = classNames(
    status === 'error' && 'text-red-800',
    status === 'info' && 'text-blue-800',
    status === 'success' && 'text-green-800',
    status === 'warn' && 'text-yellow-800'
  );

  const secondaryTextColor = classNames(
    status === 'error' && 'text-red-700',
    status === 'info' && 'text-blue-700',
    status === 'success' && 'text-green-700',
    status === 'warn' && 'text-yellow-700'
  );

  return (
    <div className={`rounded-md p-4 ${backgroundColor}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <StatusIcon status={status} size={5} />
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${primaryTextColor}`}>{primaryText}</h3>
          {secondaryText ? (
            <div className={`mt-2 text-sm ${secondaryTextColor}`}>
              {Array.isArray(secondaryText) ? (
                <ul role="list" className="list-disc pl-5 space-y-1">
                  {secondaryText.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              ) : (
                <p>{secondaryText}</p>
              )}
            </div>
          ) : null}
          {actions && <AlertActions actions={actions} status={status} />}
        </div>
      </div>
    </div>
  );
};

export default Alert;

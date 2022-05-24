import { CheckCircleIcon, ExclamationIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import classNames from 'utils/classNames';

export interface StatusIconProps {
  status: 'error' | 'warn' | 'success' | 'info';
  size?: 4 | 5 | 6;
}

export const StatusIcon = ({ status, size }: StatusIconProps) => {
  size = size ?? 5;

  const sizeClasses = classNames(size === 4 && 'h-4 w-4', size === 5 && 'h-5 w-5', size === 6 && 'h-6 w-6');

  switch (status) {
    case 'error': {
      return <XCircleIcon className={`${sizeClasses} text-red-400`} aria-hidden="true" />;
    }
    case 'warn': {
      return <ExclamationIcon className={`${sizeClasses} text-yellow-400`} aria-hidden="true" />;
    }
    case 'success': {
      return <CheckCircleIcon className={`${sizeClasses} text-green-400`} aria-hidden="true" />;
    }
    case 'info':
    default: {
      return <InformationCircleIcon className={`${sizeClasses} text-blue-400`} aria-hidden="true" />;
    }
  }
};

export default StatusIcon;

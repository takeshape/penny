import { ReactEventHandler, useCallback } from 'react';

export interface PaginationLinkProps {
  onClick?: () => void;
  current?: boolean;
  disabled?: boolean;
  href?: string;
}

export const PaginationLink = ({
  onClick,
  current,
  disabled,
  href,
  children
}: React.PropsWithChildren<PaginationLinkProps>) => {
  const handleClick: ReactEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.preventDefault();
      onClick();
    },
    [onClick]
  );

  if (disabled) {
    return (
      <span className="inline-flex items-center px-4 h-10 border border-form-200 rounded-md bg-form-200 text-form-400 cursor-not-allowed">
        {children}
      </span>
    );
  }

  if (current) {
    return (
      <span className="inline-flex items-center px-4 h-10 border border-accent-600 ring-1 ring-accent-600 rounded-md bg-background hover:bg-primary-100 focus:outline-none focus:border-accent-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-accent-600 focus:ring-accent-600 focus:ring-opacity-25">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex items-center px-4 h-10 border border-form-300 rounded-md bg-background text-form-900 hover:bg-form-100 focus:outline-none focus:border-accent-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-accent-600 focus:ring-accent-600 focus:ring-opacity-25 cursor-pointer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

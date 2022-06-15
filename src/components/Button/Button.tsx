import Loader from 'components/Loader/Loader';
import React from 'react';
import classNames from 'utils/classNames';

export type ButtonProps<T extends React.ElementType = 'button'> = {
  as?: T;
  color?: 'primary' | 'secondary' | 'clear';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

const styles = {
  base: 'min-w-6 inline-flex items-center justify-center gap-2 font-medium shadow-sm border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none',
  sizes: {
    small: 'px-2.5 py-1.5 text-xs rounded',
    medium: 'px-4 py-2 text-sm rounded-md',
    large: 'px-6 py-3 text-base rounded-md'
  },
  colors: {
    primary: 'border-transparent text-white bg-indigo-600 hover:bg-indigo-700',
    secondary: 'border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
    clear: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
  }
};

export const Button = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T> & Omit<React.ComponentProps<T>, keyof ButtonProps<T>>
) => {
  const Component = props.as ?? 'button';
  return (
    <Component
      {...props}
      onClick={props.onClick}
      disabled={props.disabled ?? props.loading}
      className={classNames(
        props.className,
        styles.base,
        styles.sizes[props.size ?? 'medium'],
        styles.colors[props.color ?? 'clear']
      )}
    >
      {props.loading && (
        <span className="h-5 flex items-center opacity-80">
          <Loader colorClass="inherit" />
          <span className="sr-only">Loading</span>
        </span>
      )}
      {props.children}
    </Component>
  );
};

export default Button;

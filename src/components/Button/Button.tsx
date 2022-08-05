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
  base: 'min-w-6 inline-flex items-center justify-center gap-2 font-medium shadow-sm border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none',
  sizes: {
    small: 'px-2.5 py-1.5 text-xs rounded',
    medium: 'px-4 py-2 text-sm rounded-md',
    large: 'px-6 py-3 text-base rounded-md'
  },
  colors: {
    primary: 'border-transparent text-background bg-accent-600 hover:bg-accent-700',
    secondary: 'border-transparent text-accent-700 bg-accent-100 hover:bg-accent-200',
    clear: 'border-primary-300 text-primary-700 bg-background hover:bg-primary-50'
  }
};

export const Button = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T> & Omit<React.ComponentProps<T>, keyof ButtonProps<T>>
) => {
  const { loading, ...rest } = props;
  const Component = props.as ?? 'button';
  return (
    <Component
      {...rest}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
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

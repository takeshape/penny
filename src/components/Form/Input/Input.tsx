import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { InputHTMLAttributes } from 'react';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import classNames from 'utils/classNames';

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  helpText?: string;
}

export const FormInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  className,
  id,
  label,
  helpText,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: FormInputProps & UseControllerProps<TFieldValues, TName>) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister
  });

  const { error } = fieldState;

  return (
    <div className={`${className} relative`}>
      <div className="flex justify-between">
        <label htmlFor={id} className="block text-sm font-medium text-formText-700">
          {label}
        </label>
        {rules?.required && (
          <span className="text-sm text-formText-400" id={`${id}-required`}>
            Required
          </span>
        )}
      </div>
      <input
        {...props}
        {...field}
        id={id}
        className={classNames(
          error
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
            : 'border-formText-300 focus:ring-accent-500 focus:border-accent-500',
          'mt-1 block w-full shadow-sm bg-formBackground placeholder-formText-300 text-formText-900 sm:text-sm rounded-md disabled:bg-formText-100 disabled:cursor-not-allowed'
        )}
      />
      {error && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
      )}
      {helpText && (
        <p className="mt-2 text-sm text-formText-500" id={`${id}-help-text`}>
          {helpText}
        </p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600" id={`${id}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;

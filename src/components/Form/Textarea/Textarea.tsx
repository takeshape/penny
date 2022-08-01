import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { TextareaHTMLAttributes } from 'react';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import classNames from 'utils/classNames';

export interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  helpText?: string;
  fluidHeight?: boolean;
}

export const FormTextarea = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  className,
  id,
  label,
  rows,
  placeholder,
  helpText,
  fluidHeight
}: FormTextareaProps & UseControllerProps<TFieldValues, TName>) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister
  });
  const { error } = fieldState;

  return (
    <div className={classNames('flex flex-col', className, fluidHeight && 'h-full')}>
      <div className="flex justify-between">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        {rules?.required && (
          <span className="text-sm text-gray-400" id="first-name-required">
            Required
          </span>
        )}
      </div>
      <div className={classNames('mt-1 relative shadow-sm rounded-md', fluidHeight && 'h-full')}>
        <textarea
          {...field}
          id={id}
          rows={rows ?? 4}
          placeholder={placeholder}
          className={classNames(
            error
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
              : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 ',
            'py-3 px-4 block w-full rounded-md placeholder-gray-400',
            fluidHeight && 'h-full'
          )}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-start pointer-events-none">
            <ExclamationCircleIcon className="mt-2 h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      {helpText && (
        <p className="mt-2 text-sm text-gray-500" id={`${id}-help-text`}>
          {helpText}
        </p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormTextarea;

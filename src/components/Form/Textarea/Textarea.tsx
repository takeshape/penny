import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { TextareaHTMLAttributes } from 'react';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import classNames from 'utils/classNames';

export interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  helpText?: string;
}

export const FormTextarea = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormTextareaProps & UseControllerProps<TFieldValues, TName>
) => {
  const { field, fieldState } = useController(props);
  const { error } = fieldState;
  return (
    <div className={props.className}>
      <div className="flex justify-between">
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
          {props.label}
        </label>
        {props.rules?.required && (
          <span className="text-sm text-gray-400" id="first-name-required">
            Required
          </span>
        )}
      </div>
      <div className="mt-1 relative shadow-sm rounded-md">
        <textarea
          {...field}
          id={props.id}
          rows={props.rows ?? 4}
          defaultValue={props.defaultValue ?? ''}
          placeholder={props.placeholder}
          className={classNames(
            error
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
              : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 ',
            'py-3 px-4 block w-full rounded-md placeholder-gray-400'
          )}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-start pointer-events-none">
            <ExclamationCircleIcon className="mt-2 h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      {props.helpText && (
        <p className="mt-2 text-sm text-gray-500" id={`${props.id}-help-text`}>
          {props.helpText}
        </p>
      )}
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${props.id}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormTextarea;

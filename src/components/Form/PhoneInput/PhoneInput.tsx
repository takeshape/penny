import classNames from '@/lib/classNames';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import {
  DefaultInputComponentProps,
  isPossiblePhoneNumber,
  FeatureProps as PhoneInputProps
} from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input/input';

export type FormPhoneInputProps = {
  id: string;
  label: string;
  helpText?: string;
  // Because the phone # validation gives no way to set a message
  defaultErrorMessage?: string;
} & Omit<PhoneInputProps<DefaultInputComponentProps>, 'inputComponent'>;

export const FormPhoneInput = <
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
  defaultErrorMessage,
  ...props
}: FormPhoneInputProps & UseControllerProps<TFieldValues, TName>) => {
  rules = {
    ...rules,
    validate: (value) => (value ? isPossiblePhoneNumber(`${value}`) : true)
  };

  const { field, fieldState } = useController({ name, control, defaultValue, rules, shouldUnregister });
  const { error } = fieldState;

  return (
    <div className={`${className} relative`}>
      <div className="flex justify-between">
        <label htmlFor={id} className="block text-sm font-medium text-form-700">
          {label}
        </label>
        {rules?.required && (
          <span className="text-sm text-form-400" id={`${id}-required`}>
            Required
          </span>
        )}
      </div>
      <PhoneInput
        {...props}
        {...field}
        id={id}
        type="tel"
        autoComplete="tel"
        className={classNames(
          error
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
            : 'border-form-300 focus:ring-accent-500 focus:border-accent-500',
          'mt-1 block w-full shadow-sm sm:text-sm bg-background rounded-md disabled:bg-form-100 disabled:cursor-not-allowed'
        )}
      />
      {error && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
      )}
      {helpText && (
        <p className="mt-2 text-sm text-form-500" id={`${id}-help-text`}>
          {helpText}
        </p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600" id={`${id}-error`}>
          {error.message === '' ? defaultErrorMessage : error.message}
        </p>
      )}
    </div>
  );
};

export default FormPhoneInput;

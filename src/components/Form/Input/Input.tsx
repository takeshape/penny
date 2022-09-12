import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import IMask from 'imask';
import { createRef, forwardRef, InputHTMLAttributes, RefCallback } from 'react';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import classNames from 'utils/classNames';

interface MaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  mask: IMask.AnyMask;
}

const MaskedInput = forwardRef<IMask.MaskElement, MaskedInputProps>(function MaskedField(
  { onChange, mask, ...props },
  inputRef
) {
  const ref = createRef();
  return (
    <IMaskInput
      {...props}
      inputRef={inputRef as RefCallback<IMask.MaskElement>}
      ref={ref}
      mask={mask as any}
      onAccept={(value: any) => {
        onChange({ target: { name: props.name, value } });
      }}
    />
  );
});

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  helpText?: string;
  mask?: IMask.AnyMask;
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
  mask,
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

  const inputClasses = classNames(
    error
      ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
      : 'border-form-300 focus:ring-accent-500 focus:border-accent-500',
    'mt-1 block w-full shadow-sm bg-background placeholder-form-400 text-form-900 sm:text-sm rounded-md disabled:bg-form-100 disabled:cursor-not-allowed'
  );

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
      {mask ? (
        <MaskedInput mask={mask} {...props} {...field} id={id} className={inputClasses} />
      ) : (
        <input {...props} {...field} id={id} className={inputClasses} />
      )}
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
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;

import { SelectHTMLAttributes } from 'react';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';

export interface SelectOption {
  key: string;
  value?: string;
  title: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: SelectOption[];
  helpText?: string;
}

export const FormSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  className,
  helpText,
  id,
  label,
  options,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SelectProps & UseControllerProps<TFieldValues, TName>) => {
  const { field } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <div className={className}>
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
      <select
        id={id}
        {...props}
        {...field}
        className="mt-1 block w-full py-2 px-3 border border-formText-300 bg-formBackground text-formText-900 rounded-md shadow-sm focus:outline-none focus:ring-accent-500 focus:border-accent-500 sm:text-sm disabled:bg-formText-100 disabled:cursor-not-allowed"
      >
        {options.map(({ key, value, title, disabled }) => (
          <option key={key} value={value} disabled={disabled}>
            {title}
          </option>
        ))}
      </select>
      {helpText && (
        <p className="mt-2 text-sm text-formText-500" id={`${id}-help-text`}>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default FormSelect;

import { SelectHTMLAttributes } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

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

export const FormSelect = ({
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
}: SelectProps & UseControllerProps<any, any>) => {
  const { field } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <div className={className}>
      <div className="flex justify-between">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        {rules?.required && (
          <span className="text-sm text-gray-400" id={`${id}-required`}>
            Required
          </span>
        )}
      </div>
      <select
        id={id}
        {...props}
        {...field}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        {options.map(({ key, value, title, disabled }) => (
          <option key={key} value={value} disabled={disabled}>
            {title}
          </option>
        ))}
      </select>
      {helpText && (
        <p className="mt-2 text-sm text-gray-500" id={`${id}-help-text`}>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default FormSelect;

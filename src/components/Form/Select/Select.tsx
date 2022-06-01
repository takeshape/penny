import type { SelectHTMLAttributes } from 'react';
import type { UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface SelectOption {
  key: string;
  value: string;
  title: string;
  selected?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: SelectOption[];
  helpText?: string;
}

export const FormSelect = ({
  className,
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
  const { field, fieldState } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        {...props}
        {...field}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        {options.map(({ key, value, title, selected }) => (
          <option key={key} value={value} selected={selected}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;

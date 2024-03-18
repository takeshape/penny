import classNames from '@/lib/classNames';
import { Switch } from '@headlessui/react';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';

export type FormToggleWithLabelProps = {
  labelPrimary: string;
  labelSecondary?: string;
  labelPosition?: 'right' | 'left';
  className?: string;
  disabled?: boolean;
};

export const FormToggleWithLabel = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  labelPrimary,
  labelSecondary,
  labelPosition,
  className,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: FormToggleWithLabelProps & UseControllerProps<TFieldValues, TName>) => {
  labelPosition = labelPosition ?? 'right';

  const { field } = useController({ name, control, defaultValue, rules, shouldUnregister });
  const isChecked = field.value === true;

  return (
    <Switch.Group
      as="div"
      className={classNames(
        labelPosition === 'right' ? 'flex-row' : 'flex-row-reverse',
        className,
        'flex items-center gap-3'
      )}
    >
      <Switch
        {...field}
        {...props}
        checked={isChecked}
        className={classNames(
          isChecked ? 'bg-accent-600' : 'bg-form-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 disabled:bg-form-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            isChecked ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-background shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
      <Switch.Label as="span">
        <span className="text-sm font-medium text-form-900">{labelPrimary}</span>
        {labelSecondary && <span className="ml-1 text-sm text-form-500">{labelSecondary}</span>}
      </Switch.Label>
    </Switch.Group>
  );
};

export default FormToggleWithLabel;

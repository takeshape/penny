import { Switch } from '@headlessui/react';
import type { PropsWithChildren } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import classNames from 'utils/classNames';

export interface SwitchWithRightLabelProps extends PropsWithChildren<{}> {
  labelPrimary: string;
  labelSecondary?: string;
  className?: string;
  disabled?: boolean;
}

const SwitchWithRightLabel = ({
  labelPrimary,
  labelSecondary,
  className,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SwitchWithRightLabelProps & UseControllerProps<any, any>) => {
  const { field } = useController({ name, control, defaultValue, rules, shouldUnregister });

  const isChecked = field.value === true;

  return (
    <Switch.Group as="div" className={className ? className : 'flex items-center'}>
      <Switch
        {...field}
        {...props}
        checked={isChecked}
        className={classNames(
          isChecked ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            isChecked ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span className="text-sm font-medium text-gray-900">{labelPrimary}</span>
        {labelSecondary && <span className="text-sm text-gray-500">{labelSecondary}</span>}
      </Switch.Label>
    </Switch.Group>
  );
};

export default SwitchWithRightLabel;

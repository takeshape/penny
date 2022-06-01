import { Switch } from '@headlessui/react';
import { useController, UseControllerProps } from 'react-hook-form';
import classNames from 'utils/classNames';

export interface SwitchWithRightLabelProps extends React.PropsWithChildren<UseControllerProps<any, any>> {
  labelPrimary: string;
  labelSecondary?: string;
  className?: string;
}

const SwitchWithRightLabel = ({ labelPrimary, labelSecondary, className, ...props }: SwitchWithRightLabelProps) => {
  const { field } = useController(props);

  const enabled = field.value === true;

  return (
    <Switch.Group as="div" className={className ? className : 'flex items-center'}>
      <Switch
        {...field}
        checked={enabled}
        className={classNames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
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

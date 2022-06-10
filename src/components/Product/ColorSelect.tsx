import { RadioGroup } from '@headlessui/react';
import type { Dispatch, SetStateAction } from 'react';
import type { ProductOptionValue } from 'types/product';
import classNames from 'utils/classNames';

export interface ColorSelectProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  options: ProductOptionValue[];
}

export const ColorSelect = ({ value, onChange, options }: ColorSelectProps) => {
  return (
    <RadioGroup value={value} onChange={onChange} className="mt-4">
      <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
      <div className="flex items-center space-x-3">
        {options.map((color) => (
          <RadioGroup.Option
            key={color.value}
            value={color.value}
            className={({ active, checked }) =>
              classNames(
                color.selectedClass,
                active && checked ? 'ring ring-offset-1' : '',
                !active && checked ? 'ring-2' : '',
                '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
              )
            }
          >
            <RadioGroup.Label as="span" className="sr-only">
              {color.name}
            </RadioGroup.Label>
            <span
              aria-hidden="true"
              className={classNames(color.class, 'h-8 w-8 border border-black border-opacity-10 rounded-full')}
            />
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default ColorSelect;

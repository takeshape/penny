import NextImage from '@/components/NextImage';
import classNames from '@/utils/classNames';
import { truncate } from '@/utils/truncate';
import { Combobox } from '@headlessui/react';
import { SearchItem } from '../../types';

export type ModalSearchItemProps = SearchItem;

export const ModalSearchItem = ({ product }: ModalSearchItemProps) => {
  return (
    <Combobox.Option
      value={product.url}
      className={({ active }) =>
        classNames('flex cursor-pointer select-none rounded-xl p-3', active && 'bg-primary-100')
      }
    >
      {({ active }) => (
        <>
          <div className="flex flex-none items-center justify-center overflow-hidden">
            <NextImage
              width={100}
              height={100}
              src={product.featuredImage.url}
              className="h-20 w-20 object-center object-cover rounded-lg"
              alt={product.featuredImage.altText}
            />
          </div>
          <div className="ml-4 flex-auto">
            <p className={classNames('text-sm font-medium', active ? 'text-primary-900' : 'text-primary-700')}>
              {product.name}
            </p>
            {product.description && (
              <p className={classNames('text-sm', active ? 'text-body-700' : 'text-body-500')}>
                {truncate(product.description, { length: 160, separator: ' ' })}
              </p>
            )}
          </div>
        </>
      )}
    </Combobox.Option>
  );
};

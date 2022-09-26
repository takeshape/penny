import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/solid';
import { Fragment, PropsWithChildren, useCallback, useMemo } from 'react';
import classNames from 'utils/classNames';

interface SortOption {
  name: string;
  href: string;
  current: boolean;
}

interface FilterOption {
  value: string;
  label: string;
  checked: boolean;
}

interface Filters {
  [filter: string]: FilterOption[];
}

type SetFilter = (filter: string, value: string, checked: boolean) => void;

export interface FilterOptionProps extends FilterOption {
  index: number;
  filter: string;
  setFilter: SetFilter;
}

export interface FilterProps {
  name: string;
  legend: string;
  options: FilterOption[];
  setFilter: SetFilter;
}
export interface FiltersProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  clearAllFilters: () => void;
  sortOptions: SortOption[];
  setSortOption: (option: SortOption) => void;
}

const FilterOption = (props: PropsWithChildren<FilterOptionProps>) => {
  return (
    <div className="flex items-center text-base sm:text-sm">
      <input
        id={`${props.filter}-${props.index}`}
        name={`${props.filter}[]`}
        value={props.value}
        type="checkbox"
        className="flex-shrink-0 h-4 w-4 border-body-300 rounded text-accent-600 focus:ring-accent-500"
        checked={props.checked}
        onChange={() => props.setFilter(props.filter, props.value, !props.checked)}
      />
      <label htmlFor={`${props.filter}-${props.index}`} className="ml-3 min-w-0 flex-1 text-body-600">
        {props.label}
      </label>
    </div>
  );
};

const Filter = (props: PropsWithChildren<FilterProps>) => {
  return (
    <fieldset>
      <legend className="block font-medium">{props.legend}</legend>
      <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
        {props.options.map((option, optionIdx) => (
          <FilterOption
            key={option.value}
            {...option}
            filter={props.name}
            index={optionIdx}
            setFilter={props.setFilter}
          />
        ))}
      </div>
    </fieldset>
  );
};

export const Filters = (props: PropsWithChildren<FiltersProps>) => {
  const { filters, setFilters, clearAllFilters, sortOptions, setSortOption } = props;
  const setFilter = useCallback(
    (filter: string, value: string, checked: boolean): void => {
      const newFilters = { ...filters };
      const selectedFilter = newFilters[filter].find((filterOption) => filterOption.value === value);
      if (selectedFilter) {
        selectedFilter.checked = checked;
      }
      setFilters(newFilters);
    },
    [filters, setFilters]
  );
  const checkedFilterCount = useMemo(() => {
    let checked = 0;
    Object.values(filters).forEach((filter) => {
      filter.forEach((filterOption) => {
        if (filterOption.checked) {
          checked++;
        }
      });
    });
    return checked;
  }, [filters]);
  return (
    <Disclosure
      as="section"
      aria-labelledby="filter-heading"
      className="relative z-10 border-t border-b border-body-200 grid items-center"
    >
      <h2 id="filter-heading" className="sr-only">
        Filters
      </h2>
      <div className="relative col-start-1 row-start-1 py-4">
        <div className="max-w-7xl mx-auto flex space-x-6 divide-x divide-body-200 text-sm px-4 sm:px-6 lg:px-8">
          <div>
            <Disclosure.Button className="group text-primary-700 font-medium flex items-center">
              <FunnelIcon
                className="flex-none w-5 h-5 mr-2 text-primary-400 group-hover:text-primary-500"
                aria-hidden="true"
              />
              {checkedFilterCount} Filter{checkedFilterCount !== 1 && 's'}
            </Disclosure.Button>
          </div>
          <div className="pl-6">
            <button type="button" className="text-primary-500" onClick={() => clearAllFilters()}>
              Clear all
            </button>
          </div>
        </div>
      </div>
      <Disclosure.Panel className="border-t border-body-200 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
            <Filter name="price" legend="Price" options={filters.price} setFilter={setFilter} />
            <Filter name="color" legend="Color" options={filters.color} setFilter={setFilter} />
          </div>
          <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
            <Filter name="size" legend="Size" options={filters.size} setFilter={setFilter} />
            <Filter name="category" legend="Category" options={filters.category} setFilter={setFilter} />
          </div>
        </div>
      </Disclosure.Panel>
      <div className="col-start-1 row-start-1 py-4">
        <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Menu as="div" className="relative inline-block">
            <div className="flex">
              <Menu.Button className="group inline-flex justify-center text-sm font-medium text-primary-700 hover:text-primary-900">
                Sort
                <ChevronDownIcon
                  className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-primary-400 group-hover:text-primary-500"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-background ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-primary-900' : 'text-primary-500',
                            active ? 'bg-primary-100' : '',
                            'block px-4 py-2 text-sm'
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            setSortOption(option);
                          }}
                        >
                          {option.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </Disclosure>
  );
};

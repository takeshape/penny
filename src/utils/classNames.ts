import { isString } from 'utils/types';

export function classNames(...classes: (string | boolean | null | undefined)[]): string {
  return classes.filter(Boolean).filter(isString).join(' ');
}

export default classNames;

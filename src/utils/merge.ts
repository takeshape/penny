import { MergeWithCustomizer } from 'lodash';
import isEqual from 'lodash-es/isEqual';
import mergeWith from 'lodash-es/mergeWith';

/**
 * Lodash `mergeWith` customizer to merge arrays
 */
const arrayMergeCustomizer: MergeWithCustomizer = (value, srcValue) => {
  if (Array.isArray(value)) {
    return [...srcValue, ...value.filter((d) => srcValue.every((s) => !isEqual(d, s)))];
  }
};

/**
 * Lodash `mergeWith` loaded with a customizer that concatenates arrays for a
 * deeper merge.
 */
export function mergeWithArrayMerge<TObject, TSource>(object: TObject, source: TSource) {
  return mergeWith(object, source, arrayMergeCustomizer);
}

export interface TruncateOptions {
  length?: number;
  separator?: string | RegExp;
  omission?: string;
}

export const truncate = (str: string, options: TruncateOptions = {}) => {
  const { length = 30, separator, omission = '...' } = options;
  if (str.length < length) {
    return str;
  }
  const matches = typeof separator === 'object' ? Array.from(str.matchAll(separator)) : undefined;
  return (
    str
      .slice(0, length - omission.length)
      .split(separator ?? ' ')
      .reduce((previous, current, index, array) => {
        if (Boolean(separator) && index === array.length - 1) {
          return previous;
        }
        if (previous.length === 0) {
          return current;
        }

        const concatenated = previous + (matches ? matches[index - 1][0] : separator ?? '') + current;
        if (concatenated.length < length) {
          return concatenated;
        }
        return previous;
      }, '') + omission
  );
};

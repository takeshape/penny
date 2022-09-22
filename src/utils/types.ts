/**
 * Turn a maybe array into a single param, preserving types.
 */
export function getSingle<T>(param?: T | T[]): T | undefined {
  if (Array.isArray(param)) {
    return param[0];
  }
  return param;
}

/**
 * Test whether a provided string is numeric, e.g., '9' is numeric while 'nine' is not.
 */
export function isNumericString(key: string): boolean {
  return !isNaN(Number(key));
}

/**
 * Mostly in arrays, return the typed value minus nulls / undefineds
 */
export function isDefined<T>(x: T | null | undefined): x is T {
  return x !== null && x !== undefined;
}

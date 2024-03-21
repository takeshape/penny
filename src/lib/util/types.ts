/**
 * Turn a maybe array into a single param, preserving types.
 */
export function getSingle<T>(param: T | T[]): T {
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
export function isNotNullish<T>(x: T | null | undefined): x is T {
  return x !== null && x !== undefined;
}

/**
 * Test if a variable is a string
 */
export function isString(maybe: unknown): maybe is string {
  return typeof maybe === 'string';
}

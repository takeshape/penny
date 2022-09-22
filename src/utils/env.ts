/**
 * Assert that a required env variable is set
 */
export const assertEnv = (value: string | undefined, defaultValue?: string): string => {
  value = value ?? defaultValue;

  if (value === undefined) {
    throw new Error(`required env variable is not set`);
  }

  return value;
};

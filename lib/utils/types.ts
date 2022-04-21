export function getSingle<T>(param?: T | T[]): T | undefined {
  if (Array.isArray(param)) {
    return param[0];
  }
  return param;
}

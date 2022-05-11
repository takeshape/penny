export function formatError(error: Error | Error[]) {
  return Array.isArray(error) ? error.map((e) => e.message).join() : error.message;
}

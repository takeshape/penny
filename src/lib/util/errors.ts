export function formatError(error: Error | Error[] | Record<'message', string> | Record<'message', string>[]) {
  return Array.isArray(error) ? error.map((e) => e.message).join() : error.message;
}

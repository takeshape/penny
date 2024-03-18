import { SigninError } from '@/features/Auth/types';
import { getSingle } from '@/lib/types';

export function formatError(error: Error | Error[] | Record<'message', string> | Record<'message', string>[]) {
  return Array.isArray(error) ? error.map((e) => e.message).join() : error.message;
}

export function parseSigninError(error: string | string[] | undefined): SigninError | undefined {
  if (!error) {
    return;
  }

  error = error ? getSingle(error) : '';

  if (error.match(/.+=.+,/) === null) {
    return {
      code: error
    };
  }

  return error.split(',').reduce(
    (err, item) => {
      const [key, value] = item.split('=');
      return {
        ...err,
        [key]: value
      };
    },
    { code: 'Unknown' }
  );
}

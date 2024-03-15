import { usePathname, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export type RemoveQueryParamsHookProps = {
  remove: string[];
};

/**
 * Return `null` or a new url if it has been changed by this hook.
 */
export function useRemoveQueryParams({ remove }: RemoveQueryParamsHookProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Return null unless there is a change in the URL
  const url = useMemo(() => {
    if (searchParams) {
      const params = new URLSearchParams(searchParams);

      for (const removeParam of remove) {
        params.delete(removeParam);
      }

      const newParams = params.toString();

      if (searchParams.toString() === newParams) {
        return null;
      }

      return `${pathname}?${newParams}`;
    }

    return null;
  }, [pathname, searchParams, remove]);

  return url;
}

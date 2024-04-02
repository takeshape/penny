'use client';

import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, timeout: number): T {
  const [state, setState] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout);
    return () => clearTimeout(handler);
  }, [value, timeout]);

  return state;
}

export default useDebounce;

'use client';

import { Error } from '@/components/Error/Error';
import Wrapper from '@/components/Wrapper/Content';
import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <Wrapper>
          <Error statusCode={500} />
        </Wrapper>
      </body>
    </html>
  );
}

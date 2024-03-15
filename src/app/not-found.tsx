import { Error } from '@/components/Error/Error';
import { Wrapper } from '@/components/Wrapper/Content';

export default function NotFound() {
  return (
    <html>
      <body>
        <Wrapper>
          <Error statusCode={404} />
        </Wrapper>
      </body>
    </html>
  );
}

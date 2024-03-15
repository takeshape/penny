import { Error } from '@/components/Error/Error';

export default function NotFound() {
  return <Error statusCode={404} />;
}

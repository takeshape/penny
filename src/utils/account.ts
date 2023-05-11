export function getActivationParams(type: 'reset' | 'activate', path: string) {
  const relevantPath = path.split(`/${type}/`)[1];
  const [customerId, token] = relevantPath.split('/');
  return { customerId, token };
}

import { COLLECTION_NAME, COLLECTIONS_ENDPOINT } from './constants';

export function transformStringToSlug(string: string) {
  return string.toLowerCase().replace(/\s+/g, '-');
}

export function getCollectionEndpoint() {
  return COLLECTIONS_ENDPOINT + transformStringToSlug(`${COLLECTION_NAME}`);
}

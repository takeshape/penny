import { COLLECTION_NAME, COLLECTIONS_ENDPOINT } from './constants';

export function transformStringToSlug(string: string) {
  return string.toLowerCase().replace(/\s+/g, '-');
}

export function getCollectionEndpoint() {
  return COLLECTIONS_ENDPOINT + transformStringToSlug(`${COLLECTION_NAME}`);
}

export function getRandomValueFromArray(array: string[]) {
  if (!array.length) {
    throw new Error(`Array should not be empty.`);
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

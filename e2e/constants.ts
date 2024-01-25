import { faker } from '@faker-js/faker';

export const PRODUCT_NAME = process.env.PLAYWRIGHT_PRODUCT_NAME;
export const HOMEPAGE_ENDPOINT = '/';
export const COLLECTION_NAME = process.env.PLAYWRIGHT_COLLECTION_NAME;
export const COLLECTIONS_ENDPOINT = '/collections/';
export const CONTACT_PAGE_ENDPOINT = '/contact';
export const INVALID_EMAIL = 'test_email@invalid';
export const VALID_EMAIL = 'test_' + faker.internet.email({ provider: 'example.fakerjs.dev' });
export const INVALID_PHONE_NUMBER = faker.string.numeric(5);
export const VALID_PHONE_NUMBER = '+1' + faker.string.numeric(10);
export const USER_NAME = 'test';
export const MESSAGE = faker.lorem.sentence();

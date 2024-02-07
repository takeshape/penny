import { faker } from '@faker-js/faker';

export function getValidEmail() {
  return 'test_' + faker.internet.email({ provider: 'example.fakerjs.dev' });
}
export function getInvalidPhoneNumber() {
  return faker.string.numeric(5);
}
export function getValidPhoneNumber() {
  return '+1' + faker.string.numeric(10);
}
export function getTextMessage() {
  return 'Test ' + faker.lorem.sentence();
}
export function getRandomString() {
  return faker.string.alpha(10);
}
export function getPassword() {
  return faker.string.alphanumeric(10);
}
export function getUserFirstName() {
  return faker.person.firstName();
}
export function getUserLastName() {
  return faker.person.lastName();
}
export function getUserPhoneNumber() {
  return `1800${faker.string.numeric(7)}`;
}

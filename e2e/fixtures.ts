import { test as baseTest } from '@playwright/test';
import { CollectionsPage } from './page-objects/collections-page';
import { ShoppingCart } from './page-objects/shopping-cart';
import { ProductPage } from './page-objects/product-page';
import { ContactPage } from './page-objects/contact-page';
import { SignInPage } from './page-objects/sign-in-page';

export const test = baseTest.extend<{
  collectionsPage: CollectionsPage;
  shoppingCart: ShoppingCart;
  productPage: ProductPage;
  contactPage: ContactPage;
  signInPage: SignInPage;
}>({
  collectionsPage: async ({ page }, use) => {
    await use(new CollectionsPage(page));
  },
  shoppingCart: async ({ page }, use) => {
    await use(new ShoppingCart(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  signInPage: async ({ page }, use) => {
    await use(new SignInPage(page));
  }
});

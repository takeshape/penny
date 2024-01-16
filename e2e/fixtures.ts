import { test as baseTest } from '@playwright/test';
import { CollectionsPage } from './page-objects/collections-page';
import { ShoppingCart } from './page-objects/shopping-cart';
import { ProductPage } from './page-objects/product-page';

export const test = baseTest.extend<{
  collectionsPage: CollectionsPage;
  shoppingCart: ShoppingCart;
  productPage: ProductPage;
}>({
  collectionsPage: async ({ page }, use) => {
    await use(new CollectionsPage(page));
  },
  shoppingCart: async ({ page }, use) => {
    await use(new ShoppingCart(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  }
});

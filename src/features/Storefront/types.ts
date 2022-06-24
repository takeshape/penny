import { CollectionBase } from 'types/collection';
import { ProductBase } from 'types/product';
import { GetStorefrontQueryResponse, StorefrontShopifyCollectionByHandleQueryResponse } from 'types/takeshape';

export type StorefrontShopifyCollection = StorefrontShopifyCollectionByHandleQueryResponse['collection'];

export type StorefrontShopifyProduct = StorefrontShopifyCollection['products']['nodes'][0];

export type StorefrontCollectionItemProduct = ProductBase;

export type StorefrontCollectionItem = {
  product: StorefrontCollectionItemProduct;
};

export type StorefrontCollection = CollectionBase<StorefrontCollectionItem>;

type Storefront = GetStorefrontQueryResponse['storefront'];
export type StorefrontChild = Storefront['components'][0];
export type BackgroundImageChild = (StorefrontChild & {
  __typename: 'BackgroundImageComponent';
})['components'][0];

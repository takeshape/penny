import { CollectionBase } from 'types/collection';
import { ProductBase } from 'types/product';
import { GetStorefrontQueryResponse } from 'types/takeshape';

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

export type StorefrontCollectionComponent = StorefrontChild & { __typename?: 'CollectionComponent' };
export type StorefrontCollectionComponentProduct =
  StorefrontCollectionComponent['collection']['shopifyCollection']['products']['nodes'][0];

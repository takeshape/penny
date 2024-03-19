import { CollectionBase } from '@/types/collection';
import { ProductBase } from '@/types/product';
import { GetStorefrontQueryResponse } from '@/types/takeshape';
import { NonNullablePath } from '@/types/util';

export type StorefrontCollectionItemProduct = ProductBase;

export type StorefrontCollectionItem = {
  product: StorefrontCollectionItemProduct;
};

export type StorefrontCollection = CollectionBase<StorefrontCollectionItem>;

type ResponseStorefront = NonNullablePath<GetStorefrontQueryResponse, ['storefront']>;
export type StorefrontChild = NonNullablePath<ResponseStorefront, ['components', 0]>;
export type BackgroundImageChild = (StorefrontChild & {
  __typename: 'BackgroundImageComponent';
})['components'][0];

export type StorefrontCollectionComponent = StorefrontChild & { __typename?: 'CollectionComponent' };
export type StorefrontCollectionComponentProduct = NonNullablePath<
  StorefrontCollectionComponent,
  ['collection', 'shopifyCollection', 'products', 'nodes', 0]
>;

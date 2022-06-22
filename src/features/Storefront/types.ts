import { ProductBase, ProductOption } from 'types/product';
import { Shopify_Collection, Shopify_PageInfo, Shopify_Product } from 'types/takeshape';

export type StorefrontShopifyProduct = Pick<
  Shopify_Product,
  | 'id'
  | 'title'
  | 'description'
  | 'descriptionHtml'
  | 'requiresSellingPlan'
  | 'priceRangeV2'
  | 'featuredImage'
  | 'publishedAt'
  | 'totalInventory'
  | 'totalVariants'
  | 'options'
  | 'sellingPlanGroupCount'
  | 'sellingPlanGroups'
  | 'reviews'
  | 'takeshape'
>;

export type StorefrontShopifyCollection = Pick<
  Shopify_Collection,
  'id' | 'handle' | 'title' | 'description' | 'descriptionHtml' | 'productsCount' | 'takeshape'
> & {
  products: {
    pageInfo: Shopify_PageInfo;
    edges: Array<{
      cursor: string;
      node: StorefrontShopifyProduct;
    }>;
  };
};

export type StorefrontTrendingProductsShopifyProduct = Pick<
  Shopify_Product,
  | 'id'
  | 'title'
  | 'description'
  | 'descriptionHtml'
  | 'requiresSellingPlan'
  | 'priceRangeV2'
  | 'featuredImage'
  | 'publishedAt'
  | 'totalInventory'
  | 'totalVariants'
  | 'options'
  | 'sellingPlanGroupCount'
  | 'sellingPlanGroups'
  | 'takeshape'
>;

export type AvailableColor = {
  name: string;
  colorBg: string;
};

export type StorefrontCollectionItemProduct = ProductBase & {
  availableColors: ProductOption;
};

// export type StorefrontCollectionItemProduct = {
//   id: string;
//   href: string;
//   name: string;
//   color: string;
//   price: string;
//   imageSrc: string;
//   imageAlt: string;
//   availableColors: AvailableColor[];
// };

export type StorefrontCollectionItem = {
  cursor: string;
  product: StorefrontCollectionItemProduct;
};

export type StorefrontCollection = {
  id: string;
  url: string;
  handle: string;
  name: string;
  description: string;
  descriptionHtml: string;
  productsCount: number;
  items: StorefrontCollectionItem[];
  pageInfo: Shopify_PageInfo;
  anchor?: string;
};

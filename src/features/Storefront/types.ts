import { Shopify_Product } from 'types/takeshape';

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

export type TrendingProduct = {
  id: string;
  href: string;
  name: string;
  color: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  availableColors: AvailableColor[];
};

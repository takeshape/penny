import type { SetRequired } from 'type-fest';
import type { ProductBase } from 'types/product';

export type ProductPageProduct = SetRequired<ProductBase, 'images' | 'variants' | 'seo'>;

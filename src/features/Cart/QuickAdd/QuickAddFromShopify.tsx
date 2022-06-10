import { useLazyQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { useEffect } from 'react';
import { reviewsIoProductReviewsToReviewHighlight } from 'transforms/reviewsIo';
import { shopifyGidToId, shopifyProductToQuickAddProduct } from 'transforms/shopify';
import { cartQuickAddAtom } from '../store';
import type { CartQuickAddArgs, CartQuickAddResponse } from './queries';
import { CartQuickAddQuery } from './queries';
import QuickAdd from './QuickAdd';

export const CartQuickAddFromShopify = () => {
  const quickAdd = useAtomValue(cartQuickAddAtom);
  const resetQuickAdd = useResetAtom(cartQuickAddAtom);

  const [loadProduct, { data, called }] = useLazyQuery<CartQuickAddResponse, CartQuickAddArgs>(CartQuickAddQuery);

  useEffect(() => {
    if (quickAdd?.productId && !called) {
      loadProduct({
        variables: {
          productId: quickAdd.productId,
          reviewsId: shopifyGidToId(quickAdd.productId)
        }
      });
    }
  }, [called, loadProduct, quickAdd?.productId]);

  if (!data?.product) {
    return null;
  }

  return (
    <QuickAdd
      isOpen={Boolean(quickAdd)}
      onClose={() => resetQuickAdd()}
      product={shopifyProductToQuickAddProduct(data.product)}
      reviews={reviewsIoProductReviewsToReviewHighlight(data.reviews).stats}
    />
  );
};

export default CartQuickAddFromShopify;

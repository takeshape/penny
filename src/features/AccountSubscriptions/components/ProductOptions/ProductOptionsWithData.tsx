import { useEffect, useMemo } from 'react';
import { QuickAddQueryResponse, QuickAddQueryVariables } from 'types/storefront';
import { useStorefrontLazyQuery } from 'utils/storefront';
import { QuickAddQuery } from '../../queries.storefront';
import { getProduct } from '../../transforms';
import { ProductOptions } from './ProductOptions';

export const ProductOptionsWithData = ({ productHandle, isOpen, onClose, currentQuantity, currentOptions }) => {
  const [loadProduct, { data, loading, error }] = useStorefrontLazyQuery<QuickAddQueryResponse, QuickAddQueryVariables>(
    QuickAddQuery
  );

  useEffect(() => {
    if (productHandle && !loading && !error) {
      loadProduct({
        variables: {
          handle: productHandle
        }
      });
    }
  }, [loading, loadProduct, productHandle, error]);

  const product = useMemo(() => data && getProduct(data), [data]);

  return (
    <ProductOptions
      isOpen={isOpen}
      onClose={onClose}
      product={product}
      currentQuantity={currentQuantity}
      currentOptions={currentOptions}
    />
  );
};

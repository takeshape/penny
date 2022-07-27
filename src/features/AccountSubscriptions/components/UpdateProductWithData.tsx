import { useEffect, useMemo } from 'react';
import { QuickAddQueryResponse, QuickAddQueryVariables } from 'types/storefront';
import { useStorefrontLazyQuery } from 'utils/storefront';
import { QuickAddQuery } from '../queries.storefront';
import { getProduct } from '../transforms';
import { QuickAdd } from './UpdateProduct';

export const UpdateProductWithData = ({ productHandle, isOpen, onClose }) => {
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

  return <QuickAdd isOpen={isOpen} onClose={onClose} product={product} />;
};

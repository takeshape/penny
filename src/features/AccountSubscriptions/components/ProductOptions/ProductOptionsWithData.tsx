import { useCallback, useEffect, useMemo } from 'react';
import { QuickAddQueryResponse, QuickAddQueryVariables } from 'types/storefront';
import { useStorefrontLazyQuery } from 'utils/storefront';
import { QuickAddQuery } from '../../queries.storefront';
import { getProduct } from '../../transforms';
import { ModalAction } from '../ModalAction';
import { OptionsForm } from './OptionsForm';
import { OptionsFormLoading } from './OptionsFormLoading';

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

  const onSubmit = useCallback(
    async (options) => {
      // eslint-disable-next-line no-console
      console.log(options);
      // Do the async submit stuff...
      // Throw to trigger a form error
      onClose();
    },
    [onClose]
  );

  const product = useMemo(() => data && getProduct(data), [data]);

  return (
    <ModalAction isOpen={isOpen} onClose={onClose}>
      {!product && <OptionsFormLoading />}
      {product && (
        <OptionsForm
          product={product}
          currentQuantity={currentQuantity}
          currentOptions={currentOptions}
          onSubmit={onSubmit}
        />
      )}
    </ModalAction>
  );
};

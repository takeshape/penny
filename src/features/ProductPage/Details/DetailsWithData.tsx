import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import {
  ProductPageTakeshapeProductArgs,
  ProductPageTakeshapeProductQuery,
  ProductPageTakeshapeProductResponse
} from '../queries';
import { getDetails } from '../transforms';
import { Details, DetailsProps } from './Details';
import { DetailsLoading } from './DetailsLoading';

export type DetailsWithDataProps = {
  productId: string;
} & Omit<DetailsProps, 'details'>;

export const DetailsWithData = ({ productId, ...props }: DetailsWithDataProps) => {
  const [loadDetails, { data, loading, error }] = useLazyQuery<
    ProductPageTakeshapeProductResponse,
    ProductPageTakeshapeProductArgs
  >(ProductPageTakeshapeProductQuery);

  useEffect(() => {
    if (productId && !data && !loading && !error) {
      loadDetails({
        variables: {
          productId
        }
      });
    }
  }, [loading, loadDetails, productId, data, error]);

  const details = data && getDetails(data);

  if (error) {
    return null;
  }

  if (!details) {
    return <DetailsLoading />;
  }

  return <Details details={details} {...props} />;
};

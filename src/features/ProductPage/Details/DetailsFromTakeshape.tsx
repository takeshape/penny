import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { takeshapeItemToProductPageDetails } from 'transforms/takeshape';
import {
  ProductPageTakeshapeDetailsArgs,
  ProductPageTakeshapeDetailsQuery,
  ProductPageTakeshapeDetailsResponse
} from '../queries';
import Details, { DetailsProps } from './Details';
import DetailsLoading from './DetailsLoading';

export type DetailsFromTakeshapeProps = {
  productId: string;
} & Omit<DetailsProps, 'details'>;

export const DetailsFromTakeshape = ({ productId, ...props }: DetailsFromTakeshapeProps) => {
  const [loadDetails, { data, loading, error }] = useLazyQuery<
    ProductPageTakeshapeDetailsResponse,
    ProductPageTakeshapeDetailsArgs
  >(ProductPageTakeshapeDetailsQuery);

  useEffect(() => {
    if (productId && !data && !loading && !error) {
      loadDetails({
        variables: {
          productId
        }
      });
    }
  }, [loading, loadDetails, productId, data, error]);

  const details = data?.productList?.items?.[0] ? takeshapeItemToProductPageDetails(data?.productList.items[0]) : null;

  if (!details) {
    return <DetailsLoading />;
  }

  return <Details details={details} {...props} />;
};

export default DetailsFromTakeshape;

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
  const [loadDetails, { data, loading }] = useLazyQuery<
    ProductPageTakeshapeDetailsResponse,
    ProductPageTakeshapeDetailsArgs
  >(ProductPageTakeshapeDetailsQuery);

  useEffect(() => {
    if (productId && !loading) {
      loadDetails({
        variables: {
          productId
        }
      });
    }
  }, [loading, loadDetails, productId]);

  const details = data?.productList?.items?.[0] ? takeshapeItemToProductPageDetails(data?.productList.items[0]) : null;

  return (
    <>
      {!details && <DetailsLoading />}
      {details && <Details details={details} {...props} />}
    </>
  );
};

export default DetailsFromTakeshape;

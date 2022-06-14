import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { takeshapeItemToProductPagePolicies } from 'transforms/takeshape';
import {
  ProductPageTakeshapePoliciesArgs,
  ProductPageTakeshapePoliciesQuery,
  ProductPageTakeshapePoliciesResponse
} from '../queries';
import Policies, { PoliciesProps } from './Policies';
import PoliciesLoading from './PoliciesLoading';

export type PoliciesWithDataProps = {
  productId: string;
} & Omit<PoliciesProps, 'policies'>;

export const PoliciesWithData = ({ productId, ...props }: PoliciesWithDataProps) => {
  const [loadPolicies, { data, loading, error }] = useLazyQuery<
    ProductPageTakeshapePoliciesResponse,
    ProductPageTakeshapePoliciesArgs
  >(ProductPageTakeshapePoliciesQuery);

  useEffect(() => {
    if (productId && !data && !loading && !error) {
      loadPolicies({
        variables: {
          productId
        }
      });
    }
  }, [data, loading, error, loadPolicies, productId]);

  const policies = data?.productList.items[0] ? takeshapeItemToProductPagePolicies(data?.productList.items[0]) : null;

  if (!policies) {
    return <PoliciesLoading />;
  }

  return <Policies policies={policies} {...props} />;
};

export default PoliciesWithData;

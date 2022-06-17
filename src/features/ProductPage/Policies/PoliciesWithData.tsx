import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import {
  ProductPageTakeshapeProductArgs,
  ProductPageTakeshapeProductQuery,
  ProductPageTakeshapeProductResponse
} from '../queries';
import { getPolicies } from '../transforms';
import { Policies, PoliciesProps } from './Policies';
import { PoliciesLoading } from './PoliciesLoading';

export type PoliciesWithDataProps = {
  productId: string;
} & Omit<PoliciesProps, 'policies'>;

export const PoliciesWithData = ({ productId, ...props }: PoliciesWithDataProps) => {
  const [loadPolicies, { data, loading, error }] = useLazyQuery<
    ProductPageTakeshapeProductResponse,
    ProductPageTakeshapeProductArgs
  >(ProductPageTakeshapeProductQuery);

  useEffect(() => {
    if (productId && !data && !loading && !error) {
      loadPolicies({
        variables: {
          productId
        }
      });
    }
  }, [data, loading, error, loadPolicies, productId]);

  const policies = data && getPolicies(data);

  if (error) {
    return null;
  }

  if (!policies) {
    return <PoliciesLoading />;
  }

  return <Policies policies={policies} {...props} />;
};

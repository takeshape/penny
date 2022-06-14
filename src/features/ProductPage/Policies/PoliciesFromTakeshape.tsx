import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { takeshapeItemToProductPagePolicies } from 'transforms/takeshape';
import {
  ProductPageTakeshapePoliciesArgs,
  ProductPageTakeshapePoliciesQuery,
  ProductPageTakeshapePoliciesResponse
} from '../queries';
import Policies, { ProductPagePoliciesProps } from './Policies';
import PoliciesLoading from './PoliciesLoading';

export type ProductPagePoliciesFromTakeshapeProps = {
  productId: string;
} & Omit<ProductPagePoliciesProps, 'policies'>;

export const ProductPagePoliciesFromTakeshape = ({ productId, ...props }: ProductPagePoliciesFromTakeshapeProps) => {
  const [loadPolicies, { data, loading }] = useLazyQuery<
    ProductPageTakeshapePoliciesResponse,
    ProductPageTakeshapePoliciesArgs
  >(ProductPageTakeshapePoliciesQuery);

  useEffect(() => {
    if (productId && !loading) {
      loadPolicies({
        variables: {
          productId
        }
      });
    }
  }, [loading, loadPolicies, productId]);

  const policies = data?.productList.items[0] ? takeshapeItemToProductPagePolicies(data?.productList.items[0]) : null;

  if (!policies) {
    return <PoliciesLoading />;
  }

  return <Policies policies={policies} {...props} />;
};

export default ProductPagePoliciesFromTakeshape;

import NextImage from 'components/NextImage';
import { ProductPagePolicies as ProductPagePoliciesType } from '../types';

export interface PoliciesProps {
  policies: ProductPagePoliciesType;
}

export const Policies = ({ policies }: PoliciesProps) => {
  return (
    <section aria-labelledby="policy-heading" className="mt-16 lg:mt-24">
      <h2 id="policy-heading" className="sr-only">
        Our policies
      </h2>
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {policies.policies.map((policy) => (
          <div key={policy.name}>
            <NextImage
              src={policy.image.url}
              alt={policy.image.altText}
              height={200}
              width={200}
              className="h-24 w-auto"
            />
            <h3 className="mt-6 text-base font-medium text-gray-900">{policy.name}</h3>
            <p className="mt-3 text-base text-gray-500">{policy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

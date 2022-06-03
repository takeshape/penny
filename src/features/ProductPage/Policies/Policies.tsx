import NextImage from 'components/NextImage';

export interface Policy {
  imageSrc: string;
  name: string;
  description: string;
}

export interface PoliciesProps {
  policies: Policy[];
}

const Policies = (props: React.PropsWithChildren<PoliciesProps>) => {
  const { policies } = props;
  return (
    <section aria-labelledby="policy-heading" className="mt-16 lg:mt-24">
      <h2 id="policy-heading" className="sr-only">
        Our policies
      </h2>
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {policies.map((policy) => (
          <div key={policy.name}>
            <div className="h-24 w-auto relative">
              <NextImage layout="fill" src={policy.imageSrc} alt="" />
            </div>
            <h3 className="mt-6 text-base font-medium text-gray-900">{policy.name}</h3>
            <p className="mt-3 text-base text-gray-500">{policy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Policies;

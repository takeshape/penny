import Button from 'components/Button/Button';
import { BackgroundImageChild } from 'features/Storefront/types';

type SaleProps = BackgroundImageChild & { __typename: 'SaleComponent' };

export const Sale = ({ buttonText, primaryText, secondaryText }: SaleProps) => {
  return (
    <section
      aria-labelledby="sale-heading"
      className="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <h2
          id="sale-heading"
          className="text-4xl font-extrabold tracking-tight text-body-900 sm:text-5xl lg:text-6xl"
        >
          {primaryText}
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-xl text-body-600">{secondaryText}</p>
        <Button as="a" href="#" size="large" className="mt-6 w-full sm:w-auto">
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

import { useAtom } from 'jotai';
import { Fragment, useState } from 'react';
import { currencyAtom } from 'store';
import NavigationMobileMenu from './NavigationMobileMenu';
import NavigationTop from './NavigationTop';

export const Navigation = () => {
  const [selectedCurrency, updateCurrency] = useAtom(currencyAtom);
  console.log(selectedCurrency);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Fragment>
      <NavigationMobileMenu isMobileMenuOpen={isMobileMenuOpen} onCloseMobileMenu={() => setMobileMenuOpen(false)} />
      <header className="relative z-10">
        <NavigationTop onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      </header>
    </Fragment>
  );
};

export default Navigation;

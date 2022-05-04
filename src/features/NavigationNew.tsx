import { Fragment } from 'react';
import NavigationMobileMenu from './NavigationMobileMenu';
import NavigationTop from './NavigationTop';
import SearchModal from './SearchModal';

export const Navigation = () => {
  return (
    <Fragment>
      <SearchModal />
      <NavigationMobileMenu />
      <header className="relative z-10">
        <NavigationTop />
      </header>
    </Fragment>
  );
};

export default Navigation;

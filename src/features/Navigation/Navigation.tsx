import SearchModal from 'features/Search/SearchModal';
import { Fragment } from 'react';
import NavigationMobileMenu from './NavigationMobileMenu';
import NavigationTop from './NavigationTop';

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

import { Fragment } from 'react';
import NavigationMobileMenu from './NavigationMobileMenu';
import NavigationTop from './NavigationTop';

export const Navigation = () => {
  return (
    <Fragment>
      <NavigationMobileMenu />
      <header className="relative z-10">
        <NavigationTop />
      </header>
    </Fragment>
  );
};

export default Navigation;

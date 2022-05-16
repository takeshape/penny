import { Fragment } from 'react';
import NavigationMobileMenu from './MobileMenu/MobileMenu';
import NavigationTop from './Top/Top';

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

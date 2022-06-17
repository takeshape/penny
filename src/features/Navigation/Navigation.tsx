import { Fragment } from 'react';
import { NavigationMobileMenu } from './NavigationMobileMenu/NavigationMobileMenu';
import { NavigationTop } from './NavigationTop/NavigationTop';

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

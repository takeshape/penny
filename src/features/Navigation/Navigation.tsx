import { Fragment } from 'react';
import { NavigationMobileMenu } from './NavigationMobileMenu/NavigationMobileMenu';
import { NavigationTop } from './NavigationTop/NavigationTop';
import { Navigation as NavigationType } from './types';

export interface NavigationProps extends NavigationType {}

export const Navigation = ({ message, links, currencies, showCurrencySelect }) => {
  return (
    <Fragment>
      <NavigationMobileMenu links={links} currencies={currencies} />
      <header className="relative z-10">
        <NavigationTop
          message={message}
          links={links}
          currencies={currencies}
          showCurrencySelect={showCurrencySelect}
        />
      </header>
    </Fragment>
  );
};

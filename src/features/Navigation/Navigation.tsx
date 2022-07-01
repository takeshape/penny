import { Fragment } from 'react';
import { NavigationMobileMenu } from './NavigationMobileMenu/NavigationMobileMenu';
import { NavigationTop } from './NavigationTop/NavigationTop';
import { Navigation as NavigationType } from './types';

export interface NavigationProps extends NavigationType {}

export const Navigation = ({ message, sections, currencies }) => {
  return (
    <Fragment>
      <NavigationMobileMenu sections={sections} currencies={currencies} />
      <header className="relative z-10">
        <NavigationTop message={message} sections={sections} currencies={currencies} />
      </header>
    </Fragment>
  );
};

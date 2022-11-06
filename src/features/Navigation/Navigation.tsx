import { Fragment } from 'react';
import data from './data.preval';
import { NavigationMobileMenu } from './NavigationMobileMenu/NavigationMobileMenu';
import { NavigationTop } from './NavigationTop/NavigationTop';
import { Navigation as TNavigation } from './types';

export interface NavigationProps extends TNavigation {}

export const Navigation = () => {
  if (!data) {
    return null;
  }

  const { message, sections, currencies } = data;
  return (
    <Fragment>
      <NavigationMobileMenu sections={sections} currencies={currencies} />
      <header className="relative z-10">
        <NavigationTop message={message} sections={sections} currencies={currencies} />
      </header>
    </Fragment>
  );
};

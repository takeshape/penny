import { useMemo, useState } from 'react';
import NavigationContext from './NavigationContext';
import type { NavigationState } from './types';

export function NavigationProvider({ children }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const value = useMemo(
    () =>
      ({
        isMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu
      } as NavigationState),
    [isMobileMenuOpen]
  );

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
}

export default NavigationProvider;

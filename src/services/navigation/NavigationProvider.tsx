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

  const [links, setLinks] = useState({
    categories: [
      {
        name: 'Women',
        featured: [
          { name: 'Sleep', href: '#' },
          { name: 'Swimwear', href: '#' },
          { name: 'Underwear', href: '#' }
        ],
        collection: [
          { name: 'Everything', href: '#' },
          { name: 'Core', href: '#' },
          { name: 'New Arrivals', href: '#' },
          { name: 'Sale', href: '#' }
        ],
        categories: [
          { name: 'Basic Tees', href: '#' },
          { name: 'Artwork Tees', href: '#' },
          { name: 'Bottoms', href: '#' },
          { name: 'Underwear', href: '#' },
          { name: 'Accessories', href: '#' }
        ],
        brands: [
          { name: 'Full Nelson', href: '#' },
          { name: 'My Way', href: '#' },
          { name: 'Re-Arranged', href: '#' },
          { name: 'Counterfeit', href: '#' },
          { name: 'Significant Other', href: '#' }
        ]
      },
      {
        name: 'Men',
        featured: [
          { name: 'Casual', href: '#' },
          { name: 'Boxers', href: '#' },
          { name: 'Outdoor', href: '#' }
        ],
        collection: [
          { name: 'Everything', href: '#' },
          { name: 'Core', href: '#' },
          { name: 'New Arrivals', href: '#' },
          { name: 'Sale', href: '#' }
        ],
        categories: [
          { name: 'Artwork Tees', href: '#' },
          { name: 'Pants', href: '#' },
          { name: 'Accessories', href: '#' },
          { name: 'Boxers', href: '#' },
          { name: 'Basic Tees', href: '#' }
        ],
        brands: [
          { name: 'Significant Other', href: '#' },
          { name: 'My Way', href: '#' },
          { name: 'Counterfeit', href: '#' },
          { name: 'Re-Arranged', href: '#' },
          { name: 'Full Nelson', href: '#' }
        ]
      }
    ],
    pages: [
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' }
    ]
  });

  const value = useMemo(
    () =>
      ({
        isMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu,
        links,
        setLinks
      } as NavigationState),
    [isMobileMenuOpen, links]
  );

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
}

export default NavigationProvider;

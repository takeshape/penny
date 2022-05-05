import type { ComponentMeta } from '@storybook/react';
import { currencyList } from 'config';
import { GetNavigationDataQuery, SearchStripeProducts } from 'queries';
import { isSearchOpenAtom } from 'store';
import GetNavigationDataResult from '../__fixtures__/GetNavigationData.result.json';
import SearchStripeProductsResults from '../__fixtures__/SearchStripeProducts.result.json';
import { NavigationTop } from './NavigationTop';

export default {
  title: 'Features/NavigationTop',
  component: NavigationTop,
  decorators: [(Story) => <div className="relative z-10">{Story()}</div>],
  parameters: {
    apolloClient: {
      mocks: [
        {
          request: {
            query: GetNavigationDataQuery
          },
          result: {
            data: {
              navigation: {
                ...GetNavigationDataResult.data.navigation,
                currencies: [...currencyList]
              }
            }
          }
        },
        {
          request: {
            query: SearchStripeProducts,
            variables: { query: 'socks' }
          },
          result: SearchStripeProductsResults
        }
      ]
    }
  }
} as ComponentMeta<typeof NavigationTop>;

const Template = (args) => <NavigationTop {...args} />;

export const Mobile = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  },
  jotai: {
    atoms: {
      isSearchOpen: isSearchOpenAtom
    },
    values: {
      isSearchOpen: false
    }
  }
};

export const Tablet = Template.bind({});

Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  },
  jotai: {
    atoms: {
      isSearchOpen: isSearchOpenAtom
    },
    values: {
      isSearchOpen: false
    }
  }
};

export const Desktop = Template.bind({});

Desktop.parameters = {
  jotai: {
    atoms: {
      isSearchOpen: isSearchOpenAtom
    },
    values: {
      isSearchOpen: false
    }
  }
};

export const SearchOpen = Template.bind({});

SearchOpen.parameters = {
  jotai: {
    atoms: {
      isSearchOpen: isSearchOpenAtom
    },
    values: {
      isSearchOpen: true
    }
  }
};

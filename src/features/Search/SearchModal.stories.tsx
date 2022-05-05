import type { ComponentMeta } from '@storybook/react';
import { SearchStripeProducts } from 'queries';
import { isSearchOpenAtom } from 'store';
import SearchStripeProductsResults from '../__fixtures__/SearchStripeProducts.result.json';
import { SearchModal } from './SearchModal';

export default {
  title: 'Features/SearchModal',
  component: SearchModal,
  decorators: [(Story) => <div className="relative z-10">{Story()}</div>],
  parameters: {
    apolloClient: {
      mocks: [
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
} as ComponentMeta<typeof SearchModal>;

const Template = (args) => <SearchModal {...args} />;

// export const Mobile = Template.bind({});

// Mobile.parameters = {
//   viewport: {
//     defaultViewport: 'mobile2'
//   },
//   jotai: {
//     atoms: {
//       isSearchOpen: isSearchOpenAtom
//     },
//     values: {
//       isSearchOpen: false
//     }
//   }
// };

// export const Tablet = Template.bind({});

// Tablet.parameters = {
//   viewport: {
//     defaultViewport: 'tablet'
//   },
//   jotai: {
//     atoms: {
//       isSearchOpen: isSearchOpenAtom
//     },
//     values: {
//       isSearchOpen: false
//     }
//   }
// };

// export const Desktop = Template.bind({});

// Desktop.parameters = {
//   jotai: {
//     atoms: {
//       isSearchOpen: isSearchOpenAtom
//     },
//     values: {
//       isSearchOpen: false
//     }
//   }
// };

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

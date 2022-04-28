import React from 'react';
import { render } from 'test/test-utils';
import LoyaltyCard from '../purchases/LoyaltyCard';
import purchases from '../__fixtures__/purchases-data.json';

describe('LoyaltyCard', () => {
  it('should render without crashing', () => {
    const { container } = render(<LoyaltyCard {...purchases.data.loyaltyCard} />, {});
    expect(container).toBeInTheDocument();
  });
});

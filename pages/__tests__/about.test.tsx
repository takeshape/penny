import React from 'react';
import { render } from 'test-utils';
import AboutPage from '../about';

describe('About Page', () => {
  it('should render without crashing', () => {
    const { container } = render(<AboutPage />);
    expect(container).toBeInTheDocument();
  });
});

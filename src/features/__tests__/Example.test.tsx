import React from 'react';
import { render } from 'test/test-utils';
import Example from '../Example';
import rickAndMortyJson from '../__fixtures__/rick-and-morty.json';

describe('Example', () => {
  it('should render without crashing', () => {
    const { container } = render(<Example characters={rickAndMortyJson.data.characters.results} columns="2" />, {});
    expect(container).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from 'test/test-utils';
import rickAndMortyJson from '../__fixtures__/rick-and-morty.json';
import Example from './Example';

describe('Example', () => {
  it('should render without crashing', () => {
    const { container } = render(<Example characters={rickAndMortyJson.data.characters.results} columns="2" />, {});
    expect(container).toBeInTheDocument();
  });
});

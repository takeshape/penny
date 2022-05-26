import type { ComponentMeta } from '@storybook/react';
// Must use named export for argTypes inference to work
import { RickAndMortyList } from './Example';
import rickAndMortyJson from './fixtures.json';

export default {
  title: 'Features / Example',
  component: RickAndMortyList,
  decorators: [(Story) => <div className="container mx-auto">{Story()}</div>]
} as ComponentMeta<typeof RickAndMortyList>;

export const Default = ({ columns }) => (
  <RickAndMortyList columns={columns} characters={rickAndMortyJson.data.characters.results} />
);

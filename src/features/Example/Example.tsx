import NextImage from 'components/NextImage';
import classNames from 'utils/classNames';

export interface RickAndMortyCharacter {
  id: string;
  image: string;
  name: string;
  species: string;
}

export interface RickAndMortyListItemProps {
  character: RickAndMortyCharacter;
}

export interface RickAndMortyListProps {
  columns?: '1' | '2' | '3' | '4';
  characters: RickAndMortyCharacter[];
}

export const RickAndMortyListItem = ({ character }: RickAndMortyListItemProps) => {
  return (
    <li className="py-4 flex">
      <div className="h-10 w-10 relative">
        <NextImage src={character.image} alt={`${character.name}'s pic`} height={200} width={200} className="rounded-full object-cover" />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{character.name}</p>
        <p className="text-sm text-gray-500">{character.species}</p>
      </div>
    </li>
  );
};

const getClassNames = (columns) =>
  classNames(
    columns === 1 && 'grid-cols-1',
    columns === 2 && 'grid-cols-2',
    columns === 3 && 'grid-cols-3',
    columns === 4 && 'grid-cols-4',
    'grid gap-4 divide-y divide-gray-200'
  );

export const RickAndMortyList = ({ characters, columns }: RickAndMortyListProps) => {
  return (
    <ul className={getClassNames(columns ? Number(columns) : 1)}>
      {characters.map((character) => (
        <RickAndMortyListItem key={character.id} character={character} />
      ))}
    </ul>
  );
};

export default RickAndMortyList;

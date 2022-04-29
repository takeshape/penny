import classNames from 'classnames';
import Image from 'components/NextImage';

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
        <Image
          src={character.image}
          alt="Picture of the author"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded-full" // just an example
        />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{character.name}</p>
        <p className="text-sm text-gray-500">{character.species}</p>
      </div>
    </li>
  );
};

const getClassNames = (columns) =>
  classNames({
    'grid grid-cols-1 gap-4 divide-y divide-gray-200': columns === 1,
    'grid grid-cols-2 gap-4 divide-y divide-gray-200': columns === 2,
    'grid grid-cols-3 gap-4 divide-y divide-gray-200': columns === 3,
    'grid grid-cols-4 gap-4 divide-y divide-gray-200': columns === 4
  });

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

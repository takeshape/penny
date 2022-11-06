import 'server-only';
import data from './data.preval';

export function Nav() {
  return (
    <nav>
      <ul>
        {data.results.map((character: any) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </nav>
  );
}

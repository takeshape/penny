import { sharedData } from 'generated';
import 'server-only';

export function Nav() {
  const data = sharedData;
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

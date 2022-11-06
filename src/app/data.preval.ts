import preval from 'next-plugin-preval';

export async function getLayoutData() {
  // eslint-disable-next-line no-console
  console.log('getLayoutData');
  const response = await fetch('https://rickandmortyapi.com/api/character');
  return response.json();
}

export default preval(getLayoutData());

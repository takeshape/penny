import { useState, useEffect } from 'react';

function useCountries() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getCountries() {
      const { countries } = await import('./countries.json');
      setData(countries);
    }

    getCountries();
  }, []);

  return data;
}

export default useCountries;

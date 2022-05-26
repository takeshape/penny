import { useEffect, useState } from 'react';

function useCountries() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getCountries() {
      const { countries } = await import('../countries/countries-small.json');
      setData(countries);
    }

    getCountries();
  }, []);

  return data;
}

export default useCountries;

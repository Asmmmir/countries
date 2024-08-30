import { useEffect, useState } from 'react';
import CountriesList from './components/CountriesList';

function App() {
  const [countries, setCountries] = useState<[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all', {
          headers: {
            'Content-Type': 'application/json',
          }
        })

        const data = await response.json();
        setCountries(data);
      }
      catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className='container'>
      <CountriesList countries={countries} />;
    </div>

  )

}

export default App;
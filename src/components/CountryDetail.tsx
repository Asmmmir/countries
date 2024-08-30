import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface TCountryDetail {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: string[];
}

const CountryDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<TCountryDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!response.ok) {
          throw new Error('Country not found');
        }
        const data = await response.json();
        setCountry(data[0]); 
      } catch (err) {
        if(err instanceof Error) {
            setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{country?.name.common}</h1>
      <img src={country?.flags.png} alt={`${country?.name.common} flag`} />
      <p><strong>Official Name:</strong> {country?.name.official}</p>
      <p><strong>Population:</strong> {country?.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country?.region}</p>
      <p><strong>Capital:</strong> {country?.capital?.join(', ')}</p>
    </div>
  );
};

export default CountryDetail;

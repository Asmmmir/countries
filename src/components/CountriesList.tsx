import React from 'react';
import Country from './Country';

interface TCountry {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
}

interface CountriesListProps {
  countries: TCountry[];
}

const CountriesList: React.FC<CountriesListProps> = ({ countries }) => {
  return (
    <div className='d-flex flex-wrap justify-content-between gap-5'>
      {countries.map((country) => (
        <Country key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
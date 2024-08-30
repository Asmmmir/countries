import { useNavigate } from 'react-router-dom';

const Country = ({ country: country }: any) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${country.name.common}`);
  };

  return (
    <div onClick={handleClick} className="card" style={{ width: '18rem' }}>
      <img src={country.flags.png} className="card-img-top" alt="flag" width={285} height={200} />
      <div className="card-body">
        <h5 className="card-title">{country.name.common}</h5>
        <p className="card-text">{country.name.official}</p>
      </div>
    </div>
  )
}

export default Country
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchByCode } from '../redux/countries/countriesSlice';

const CountryDetails = () => {
  const { loading, countryResult } = useSelector((store) => store.countries);
  const dispatch = useDispatch();
  const { code } = useParams();

  useEffect(() => {
    if (code) {
      console.log(code);
      dispatch(searchByCode(code.toLowerCase()));
    }
  }, [dispatch, code]);

  if (loading || countryResult.length === 0) {
    return (<h2>Content is not fetched thus not available</h2>);
  }
  return (
    <section className="country-details">
      <div>
        <h1>{countryResult[0].name.official}</h1>
        <img src={countryResult[0].flags.png} alt={`Flag of ${countryResult[0].name.common}`} />
        <p>
          Capital:&nbsp;
          {countryResult[0].capital}
        </p>
        <p>
          <stron>Capital Info:</stron>
          <span>
            {' '}
            Latitude_&nbsp;
            {countryResult[0].capitalInfo.latlng[0]}
          </span>
          ;
          <span>
            {' '}
            Longitude_&nbsp;
            {countryResult[0].capitalInfo.latlng[1]}
          </span>
        </p>
        <p>
          Continent:&nbsp;
          {countryResult[0].continents[0]}
        </p>
        <p>
          Currencies:&nbsp;
          {Object.values(countryResult[0].currencies).map((currency) => currency.name).join(', ')}
        </p>
        <p>
          Languages:&nbsp;
          {Object.values(countryResult[0].languages).join(', ')}
        </p>
        <p>
          Region:&nbsp;
          {countryResult[0].region}
        </p>
        <p>
          Population:&nbsp;
          {countryResult[0].population}
        </p>
        <p>
          Timezones:&nbsp;
          {countryResult[0].timezones.join(', ')}
        </p>
        <div className="borders">
          <p>Country borders:&nbsp;</p>
          {countryResult[0].borders ? (countryResult[0].borders.map((border) => (
            <Link className="border-name" to={`/${border}`} key={border}>
              <p>
                {border}
&nbsp;
              </p>
            </Link>
          ))
          )
            : (<span>No borders</span>)}

        </div>
      </div>
    </section>
  );
};

export default CountryDetails;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries, searchByRegion } from '../redux/countries/countriesSlice';

const Countries = () => {
  const { countriesData, loading, region } = useSelector((store) => store.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    if (region) {
      dispatch(searchByRegion(region));
    }
  }, [dispatch, region]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        countriesData.map((country) => (
          <Link className="country-element" key={country.cioc} to={`/${country.cioc}`}>
            <div className="content">
              <img className="card-bg" src={country.flags.png} alt={`Flag of ${country.name.common}`} />
              <div className="overlay">
                <h3>{country.name.common}</h3>
                <p>
                  Region:&nbsp;
                  <span>{country.region}</span>
                </p>
                <p>
                  Capital:&nbsp;
                  <span>{country.capital}</span>
                </p>
              </div>
            </div>
          </Link>
        ))
      )}
    </>
  );
};

export default Countries;

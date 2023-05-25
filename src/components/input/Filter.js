import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { setRegion, reset } from '../../redux/countries/countriesSlice';

const Filter = () => {
  const regions = ['Africa', 'Europe', 'Asia', 'America', 'Oceania'];
  const [filter, setFilter] = useState('');
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const handleDropDown = () => {
    setDisplayDropDown(!displayDropDown);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (filter !== '') {
      dispatch(setRegion(filter.toLowerCase()));
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, filter]);

  return (
    <section className="filter-container">
      <button className="filter" onClick={handleDropDown} type="button" aria-expanded={displayDropDown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <FontAwesomeIcon icon={faAngleDown} />
        Click
      </button>
      {displayDropDown ? (
        <div className="dropdown">
          {regions.map((item) => (
            <div
              key={item}
              className="drop-item"
              onClick={() => {
                setFilter(item);
                handleDropDown();
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setFilter(item);
                  handleDropDown();
                }
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;

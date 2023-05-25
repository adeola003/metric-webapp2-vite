import React from 'react';
import Filter from './input/Filter';
import Countries from './Countries';
import world from '../assets/world-map.jpg';

const Home = () => (
  <>
    <section data-testid="home" className="input-container">
      <Filter />
      <a href="https://gisgeography.com/wp-content/uploads/2022/04/High-Resolution-World-Map-2048x1024.jpg" target="_blank" rel="noreferrer">
        <img className="world-map" src={world} alt="World Map" />
      </a>
    </section>
    <section className="country-container">
      <h3 className="ctry-cont-title">Countries list</h3>
      <div className="cards-wrapper">
        <Countries />
      </div>
    </section>
  </>
);

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <nav className="navbar">
    <Link to="/" className="back-btn">
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
    <div className="header-text">Discover the world!</div>
  </nav>
);

export default Header;

import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <nav className="home-nav">
      <p>The menu will be here.</p>
      <Link to="/home">Home</Link>
      <Link to="/home/categories">Categories</Link>
    </nav>
  )
};

export default Header;
import React from 'react';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Logo}>
        <Link to="/">
          Logo
        </Link>
      </div>
      <Navigation />
    </header>
  )
}

export default Header;
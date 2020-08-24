import React from 'react';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/images/logo.png';

const Header = props => {
  return (
    <header className={classes.Header}>
      <div className={classes.Logo}>
        <Link to="/">
          <img src={logo} alt="Logo"/>
        </Link>
      </div>
      <Navigation shoppingCartLength={props.shoppingCartLength} isAuthenticated={props.isAuthenticated} />
    </header>
  )
}

export default Header;
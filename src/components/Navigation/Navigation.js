import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './Navigation.module.scss';
import { MdShoppingCart} from 'react-icons/md';

const Navigation = props => {
  let routes = (
    <ul>
      <NavigationItem link='/'>Home</NavigationItem>
      <NavigationItem link='/login'>Login</NavigationItem>
      <NavigationItem link='/register'>Register</NavigationItem>
      <NavigationItem link='/shopping-cart'><MdShoppingCart /></NavigationItem>
    </ul>
  );

  if(props.isAuthenticated) {
    routes = (
      <ul>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/shopping-cart'><MdShoppingCart /></NavigationItem>
        <NavigationItem button link='/logout'>Logout</NavigationItem>
      </ul>
    );
  }
  return (
    <nav className={classes.Navigation}>
      {routes}
    </nav>
  )
}

export default Navigation;
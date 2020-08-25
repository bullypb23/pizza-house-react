import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './Navigation.module.scss';
import { MdShoppingCart} from 'react-icons/md';

const Navigation = props => {
  let navigationClasses = [classes.Navigation];

  if(props.open === true) {
    navigationClasses.push(classes.Open);
  }

  let routes = (
    <ul>
      <NavigationItem link='/'>Home</NavigationItem>
      <NavigationItem link='/login'>Login</NavigationItem>
      <NavigationItem link='/register'>Register</NavigationItem>
      <NavigationItem link='/shopping-cart'>
        <div>
          <MdShoppingCart />
          <span>{props.shoppingCartLength > 0 ? '(' + props.shoppingCartLength + ')' : null}</span>
        </div>
      </NavigationItem>
    </ul>
  );

  if(props.isAuthenticated) {
    routes = (
      <ul>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
        <NavigationItem link='/shopping-cart'>
          <div>
            <MdShoppingCart />
            <span>{props.shoppingCartLength > 0 ? '(' + props.shoppingCartLength + ')' : null}</span>
          </div>
        </NavigationItem>
        <NavigationItem button link='/logout'>Logout</NavigationItem>
      </ul>
    );
  }
  return (
    <nav className={navigationClasses.join(' ')}>
      {routes}
    </nav>
  )
}

export default Navigation;
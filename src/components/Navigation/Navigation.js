import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/login'>Login</NavigationItem>
        <NavigationItem link='/register'>Register</NavigationItem>
      </ul>
    </nav>
  )
}

export default Navigation;
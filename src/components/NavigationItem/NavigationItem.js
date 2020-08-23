import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.scss';

const NavigationItem = props => {
  let itemClass = [];

  if(props.button) {
    itemClass.push(classes.Button);
  }
  return (
    <li className={classes.NavigationItem}>
      <NavLink className={itemClass.join(' ')} activeClassName={classes.Active} exact to={props.link}>{props.children}</NavLink>
    </li>
  )
}

export default NavigationItem;
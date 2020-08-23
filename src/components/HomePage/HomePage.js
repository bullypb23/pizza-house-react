import React from 'react';
import classes from './HomePage.module.scss';
import pizza from '../../assets/images/bg_1.png';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className={classes.HomePage}>
        <div className={classes.Banner}>
          <img src={pizza} alt="Pizza"/>
        </div>
        <div className={classes.Heading}>
          <span>Welcome</span>
          <h1>Italian pizza</h1>
          <p>Choose from menu and order best food in Munich!</p>
          <div className={classes.ButtonContainer}>
            <Link to='#menu'>View Menu</Link>
          </div>
        </div>
      </div>
      <div id='#menu'>
        <Menu />
      </div>
    </>
  )
}

export default HomePage;
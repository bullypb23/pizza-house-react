import React from 'react';
import classes from './HomePage.module.scss';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Slides from '../Slides/Slides';

const HomePage = () => {
  return (
    <>
      <div className={classes.HomePage}>
        <Slides />
      </div>
      <div id='menu'>
        <Menu />
      </div>
      <Contact />
    </>
  )
}

export default HomePage;
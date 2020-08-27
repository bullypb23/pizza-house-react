import React from 'react';
import classes from './HomePage.module.scss';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Slides from '../Slides/Slides';
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import restaurant from '../../assets/images/restaurant.jpg';

const HomePage = () => {
  return (
    <>
      <div className={classes.HomePage}>
        <Slides />
      </div>
      <div className={classes.Informations}>
        <div>
          <FaPhoneAlt />
          <span>+49 89 123 4567</span>
        </div>
        <div>
          <FaMapMarkerAlt />
          <span>Marienplatz 1, Munich</span>
        </div>
        <div>
          <FaClock />
          <span>Open every day 8:00-22:00</span>
        </div>
      </div>
      <div className={classes.RestaurantInfo}>
        <div className={classes.ImageContainer}>
          <img src={restaurant} alt="Pizza House"/>
        </div>
        <div className={classes.Heading}>
          <h2>Welcome to <span>Pizza House</span></h2>
          <p>Munich best pizza delivery company. Place your order either online or by phone and we will deliver to your address as soon as posible.</p>
          <p>We offer you original italian recipies for pizzas and best homemade recipies for burgers, our newest addition to menu.</p>
          <p>Also, we guarantee that your food will still be warm when we deliver it to your address.</p>
        </div>
      </div>
      <div id='menu'>
        <Menu />
      </div>
      <Contact />
    </>
  )
}

export default HomePage;
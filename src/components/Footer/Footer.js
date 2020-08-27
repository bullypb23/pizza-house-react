import React from 'react';
import classes from './Footer.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaInstagram, FaFacebook, FaAt } from 'react-icons/fa';

const Footer = props => {
  let routes = (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/shopping-cart">Shopping Cart</Link></li>
    </ul>
  );

  if(props.isAuthenticated) {
    routes = (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/shopping-cart">Shopping Cart</Link></li>
      </ul>
    )
  }

  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterLogo}>
        <div className={classes.ImageContainer}>
          <img src={logo} alt="Logo"/>
        </div>
        <p><FaAt />info@pizzahouse.com</p>
      </div>
      <div className={classes.Navigation}>
        {routes}
      </div>
      <div className={classes.SocialMedia}>
        <div className={classes.SocialMediaHeading}>
          <h3>Follow Us on Social Media</h3>
        </div>
        <div className={classes.SocialMediaIconsContainer}>
          <a href="https://www.instagram.com/" target="blank">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/" target="blank">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className={classes.Copyright}>
        <p>Copyright Pizza House© - {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer;
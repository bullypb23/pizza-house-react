import React from 'react';
import classes from './CheckoutSummary.module.scss';
import { Link } from 'react-router-dom';

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <div className={classes.OrderButton}>
        <Link to={props.link}>{props.text}</Link>
      </div>
      <div className={classes.OrderSummary}>
        <div className={classes.OrderSummaryHeading}>
          <h5>Order Summary</h5>
        </div>
        <div className={classes.OrderSummaryPrice}>
          <p>Total: {props.totalPrice.toFixed(2)} €</p>
          <p>Delivery price: {props.deliveryPrice} €</p>
          <p>Order total: {props.totalPriceWithDelivery.toFixed(2)} €</p>
          <p>Price in dollars: {(props.totalPriceWithDelivery * props.converter).toFixed(2)} $</p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary;
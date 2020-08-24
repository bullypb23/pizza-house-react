import React, { Component } from 'react';
import classes from './ShoppingCart.module.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartItem from '../../components/ShoppingCartItem/ShoppingCartItem';
import * as actions from '../../store/actions/shoppingCart';
import { MdShoppingCart } from 'react-icons/md';

class ShoppingCart extends Component {
  render() {
    let items;
    if(this.props.shoppingCart.length !== 0) {
      items = Object.keys(this.props.shoppingCart).map(key => (
        <ShoppingCartItem 
          key={key}
          id={key}
          item={this.props.shoppingCart[key]}
          handleQuantity={this.props.handleQuantity}
          removeItem={this.props.removeItem}
        />
      ))
    } else {
      items = (
        <div className={classes.EmptyShoppingCart}>
          <h4>Your shopping cart is empty. Go to <Link to="/">Home</Link> page and choose something from our menu!</h4>
        </div>)
    }

    return (
      <div className={classes.ShoppingCart}>
        <div className={classes.Heading}>
          <h4>Your shopping cart <span><MdShoppingCart /></span></h4>
        </div>
        <div className={classes.Container}>
          <div className={classes.ShoppingCartItems}>
            {items}
          </div>
          {this.props.shoppingCart.length !== 0 ? (
            <div className={classes.Checkout}>
              <div className={classes.OrderButton}>
                <Link to='/checkout'>Checkout</Link>
              </div>
              <div className={classes.OrderSummary}>
                <div className={classes.OrderSummaryHeading}>
                  <h5>Order Summary</h5>
                </div>
                <div className={classes.OrderSummaryPrice}>
                  <p>Total: {this.props.totalPrice} €</p>
                  <p>Delivery price: {this.props.deliveryPrice} €</p>
                  <p>Order total: {this.props.totalPriceWithDelivery} €</p>
                  <p>Price in dollars: {(this.props.totalPriceWithDelivery * this.props.converter).toFixed(2)} $</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart.shoppingCart,
    deliveryPrice: state.shoppingCart.deliveryPrice,
    totalPrice: state.shoppingCart.totalPrice,
    totalPriceWithDelivery: +state.shoppingCart.deliveryPrice + +state.shoppingCart.totalPrice,
    converter: state.shoppingCart.converter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleQuantity: (id, value) => dispatch(actions.handleQuantity(id, value)),
    removeItem: (id) => dispatch(actions.removeItem(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
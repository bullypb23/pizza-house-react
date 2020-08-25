import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/products';
import classes from './Orders.module.scss';
import moment from 'moment';
import Spinner from '../../components/Spinner/Spinner';

class Orders extends Component {
  componentDidMount() {
    this.props.fetchPreviousOrders(this.props.token);
  }

  render() {
    let orders = this.props.previousOrders;
    let orderItems;

    if(this.props.areOrdersLoaded && orders.length !== 0) {
      orderItems = orders.map((order, index) => {
        return (
          <div className={classes.Order} key={index}>
            <div className={classes.OrderInformation}>
              <h5>Order details</h5>
              <p>Customer name: {order.name}</p>
              <p>Address: {order.address}</p>
              <p>Date: {moment(order.created_at).format("DD MMMM YYYY HH:mm")}</p>
              <p>Total price: {order.total_price} €</p>
            </div>
            <div className={classes.OrderItems}>
              <h5>Products details</h5>
              {order.order_items.map((item, index) => (
                <p key={index}>{item.product.type === 1 ? 'Pizza' : 'Burger'}: {item.product.name} - {item.size.size}</p>
              ))}
            </div>
          </div>
        );
      })
    } else {
      orderItems = <div className={classes.NoOrder}>No previous orders!</div>
    }

    return (
      <div className={classes.Orders}>
        <div className={classes.Heading}>
          <h4>Your previous orders</h4>
        </div>
        <div className={classes.OrdersContainer}>
          {this.props.areOrdersLoaded ? orderItems : <Spinner />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token,
    areOrdersLoaded: state.products.areOrdersLoaded,
    previousOrders: state.products.previousOrders,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPreviousOrders: (token) => dispatch(actions.fetchPreviousOrders(token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
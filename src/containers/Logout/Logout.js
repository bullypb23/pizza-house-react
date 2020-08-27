import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../../store/actions/user';
import * as productActions from '../../store/actions/products';
import * as shoppingCartActions from '../../store/actions/shoppingCart';

class Logout extends Component {
  componentDidMount() {
    this.props.handleLogout(this.props.token);
    this.props.emptyPreviousOrders();
    this.props.resetShoppingCart();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: (token) => dispatch(userActions.handleLogout(token)),
    emptyPreviousOrders: () => dispatch(productActions.emptyPreviousOrders()),
    resetShoppingCart: () => dispatch(shoppingCartActions.resetShoppingCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout); 
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../../store/actions/user';
import * as productActions from '../../store/actions/products';

class Logout extends Component {
  componentDidMount() {
    this.props.handleLogout(this.props.token);
    this.props.emptyPreviousOrders();
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout); 
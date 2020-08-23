import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/user';

class Logout extends Component {
  componentDidMount() {
    this.props.handleLogout(this.props.token);
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
    handleLogout: (token) => dispatch(actions.handleLogout(token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout); 
import React, { Component } from 'react';
import classes from './OrderRecieved.module.scss';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import * as actions from '../../store/actions/shoppingCart';
import { FaTruck } from 'react-icons/fa';

class OrderRecieved extends Component {
  componentWillUnmount() {
    this.props.removeMessage();
  }

  render() {
    if (this.props.message === '') {
      return <Redirect to='/' />
    }

    return (
      <div className={classes.OrderRecieved}>
        <div className={classes.Container}>
          <h4>{this.props.message}<span><FaTruck /></span></h4>
          <p>We will deliver your order as soon as posible! Enjoy your meal!</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    message: state.shoppingCart.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeMessage: () => dispatch(actions.removeMessage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderRecieved);
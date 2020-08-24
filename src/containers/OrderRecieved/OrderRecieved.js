import React, { Component } from 'react';
import classes from './OrderRecieved.module.scss';
import { connect } from 'react-redux';

class OrderRecieved extends Component {
  render() {
    return (
      <div className={classes.OrderRecieved}>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    message: state.shoppingCart.message
  }
}

export default connect(mapStateToProps)(OrderRecieved);
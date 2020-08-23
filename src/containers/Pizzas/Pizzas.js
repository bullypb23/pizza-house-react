import React, { Component } from 'react';
import classes from './Pizzas.module.scss';
import { connect } from 'react-redux';

class Pizzas extends Component {
  render() {
    let pizzasArray = Object.keys(this.props.pizzas);
    return (
      <div className={classes.Pizzas}>
        {pizzasArray.map(pizza => (
          console.log(pizza)
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pizzas: state.products,
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizzas);
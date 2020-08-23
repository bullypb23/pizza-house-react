import React, { Component } from 'react';
import classes from './Pizzas.module.scss';
import { connect } from 'react-redux';
import Pizza from '../../components/Pizza/Pizza';
import * as actions from '../../store/actions/shoppingCart';

class Pizzas extends Component {
  addToShoppingCart = (name, size, price) => {
    this.props.addToShoppingCart(name, size, price);
  }

  render() {
    let pizzas = this.props.products;
    let items;
    if(this.props.isProductLoaded) {
      items = Object.keys(pizzas)
        .filter(pizza => {
          return pizzas[pizza].type === 1
        })
        .map(key => (
        <Pizza 
          key={key} 
          name={pizzas[key].name}
          ingredients={pizzas[key].ingredients}
          sizes={pizzas[key].sizes}
          addToShoppingCart={this.addToShoppingCart}   
        />
      ))
    }
    return (
      <div className={classes.Pizzas}>
        {items}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    isProductLoaded: state.products.isProductLoaded,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToShoppingCart: (name, size, price) => dispatch(actions.addToShoppingCart(name, size, price))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizzas);
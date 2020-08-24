import React, { Component } from 'react';
import classes from './Pizzas.module.scss';
import { connect } from 'react-redux';
import Pizza from '../../components/Pizza/Pizza';
import * as actions from '../../store/actions/shoppingCart';

class Pizzas extends Component {
  addToShoppingCart = (id, name, size, price) => {
    this.props.addToShoppingCart(id, name, size, price);
  }

  render() {
    let pizzas = this.props.products;
    let items;
    if(this.props.areProductsLoaded) {
      items = Object.keys(pizzas)
        .filter(pizza => {
          return pizzas[pizza].type === 1
        })
        .map(key => (
        <Pizza 
          key={key}
          id={key} 
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
    areProductsLoaded: state.products.areProductsLoaded,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToShoppingCart: (id, name, size, price) => dispatch(actions.addToShoppingCart(id, name, size, price))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizzas);
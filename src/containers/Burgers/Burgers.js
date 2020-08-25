import React, { Component } from 'react';
import classes from './Burgers.module.scss';
import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import * as actions from '../../store/actions/shoppingCart';

class Burgers extends Component {
  addToShoppingCart = (id, name, size, price) => {
    this.props.addToShoppingCart(id, name, size, price);
  }

  render() {
    let burgers = this.props.products;
    let items;
    if(this.props.areProductsLoaded) {
      items = Object.keys(burgers)
        .filter(pizza => {
          return burgers[pizza].type === 2
        })
        .map(key => (
        <Product 
          key={key}
          id={burgers[key].id} 
          name={burgers[key].name}
          ingredients={burgers[key].ingredients}
          sizes={burgers[key].sizes}
          addToShoppingCart={this.addToShoppingCart}   
        />
      ))
    }
    return (
      <div className={classes.Burgers}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Burgers);
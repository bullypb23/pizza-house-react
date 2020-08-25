import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Register from './containers/Register/Register';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import Checkout from './containers/Checkout/Checkout';
import OrderRecieved from './containers/OrderRecieved/OrderRecieved';
import Orders from './containers/Orders/Orders';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as productActions from './store/actions/products';
import * as shoppingCartActions from './store/actions/shoppingCart';

class App extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.fetchCurrencyExchange();
    if(this.props.isAuthenticated) {
      this.props.fetchPreviousOrders(this.props.token);
    }
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/shopping-cart' component={ShoppingCart} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/order-recieved' component={OrderRecieved} />
        <Redirect to='/' />
      </Switch>
    );

    if(this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/logout' component={Logout} />
          <Route path='/shopping-cart' component={ShoppingCart} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/order-recieved' component={OrderRecieved} />
          <Route path='/orders' component={Orders} />
          <Redirect to='/' />
        </Switch>
      )
    }

    return (
      <div className="App">
        <Header shoppingCartLength={this.props.shoppingCart} isAuthenticated={this.props.isAuthenticated} />
        <main>
          {routes}
        </main>
        <Footer isAuthenticated={this.props.isAuthenticated} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    shoppingCart: state.shoppingCart.shoppingCart.length,
    token: state.user.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(productActions.fetchProducts()),
    fetchCurrencyExchange: () => dispatch(shoppingCartActions.fetchCurrencyExchange()),
    fetchPreviousOrders: (token) => dispatch(productActions.fetchPreviousOrders(token)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
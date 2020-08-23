import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/products';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.props.getProducts();
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Redirect to='/' />
      </Switch>
    );

    if(this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/logout' render={() => <Logout />} />
          <Redirect to='/' />
        </Switch>
      )
    }

    return (
      <div className="App">
        <Header isAuthenticated={this.props.isAuthenticated} />
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(actions.fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
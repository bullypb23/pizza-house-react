import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';

class App extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(actions.fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
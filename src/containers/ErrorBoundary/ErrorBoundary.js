import React, { Component } from "react";
import classes from './ErrorBoundary.module.scss';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes.ErrorBoundary}>
          <h1>Something went wrong!</h1>
          <p>There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
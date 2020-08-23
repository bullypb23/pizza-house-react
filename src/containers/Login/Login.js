import React, { Component } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Login.module.scss';
import TextError from '../../components/TextError/TextError';
import * as Yup from 'yup';
import * as actions from '../../store/actions/user';

class Login extends Component {

  onSubmit = (values) => {
    this.props.handleLogin(values);
  }

  initialValues = {
    email: '',
    password: ''
  }

  validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format!")
      .required('This field is required!'),
    password: Yup.string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must include at least 1 character and 1 number.")
      .min(8, "Must be 8 charachters long")
      .required("This field is required!")
  })

  render() {
    let login;
    if (this.props.isAuthenticated) {
      login = <Redirect to='.' />
    } else {
      login = (
        <div className={classes.LoginForm}>
          <h3>Login</h3>
          <Formik 
            initialValues={this.initialValues} 
            onSubmit={this.onSubmit} 
            validationSchema={this.validationSchema}
          >
            {formik => {
              return (
                <Form>
                  <div className={classes.Form}>
                    <div className={classes.InputControl}>
                      <label htmlFor="email">Email</label>
                      <Field type="text" id="email" name="email" />
                      <ErrorMessage name="email" component={TextError} />
                    </div>
                    <div className={classes.InputControl}>
                      <label htmlFor="password">Password</label>
                      <Field type="password" id="password" name="password" />
                      <ErrorMessage name="password" component={TextError} />
                    </div>
                    <div className={classes.InputControl}>
                      <div className={classes.ButtonContainer}>
                        <button
                          type="submit"
                          disabled={!formik.isValid || formik.isSubmitting}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      )
    }
    return (
      <div className={classes.Login}>
        {login}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: (values) => dispatch(actions.handleLogin(values))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
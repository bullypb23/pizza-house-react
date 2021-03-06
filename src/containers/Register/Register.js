import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/user';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classes from './Register.module.scss';
import TextError from '../../components/TextError/TextError';
import Spinner from '../../components/Spinner/Spinner';

class Register extends Component {
  initialValues = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  validationSchema = Yup.object({
    name: Yup.string()
      .required('This field is required!'),
    email: Yup.string()
      .email("Invalid email format!")
      .required('This field is required!'),
    password: Yup.string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must include at least 1 character and 1 number.")
      .min(8, "Must be 8 charachters long")
      .required("This field is required!"),
    password_confirmation: Yup.string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$$/, "Password must include at least 1 character and 1 number.")
      .min(8, "Must be 8 charachters long")
      .required("This field is required!")
  })

  onSubmit = (values, onSubmitProps) => {
    this.props.handleRegistration(values);
    onSubmitProps.setSubmitting(false);
  }

  render() {
    let login;
    if (this.props.isAuthenticated) {
      login = <Redirect to='/' />
    } else {
      login = (
        <div className={classes.RegisterForm}>
          <h3>Create account</h3>
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
                      <label htmlFor="name">Name</label>
                      <Field type="text" id="name" name="name" />
                      <ErrorMessage name="name" component={TextError} />
                    </div>
                    <div className={classes.InputControl}>
                      <label htmlFor="email">Email</label>
                      <Field type="email" id="email" name="email" />
                      <ErrorMessage name="email" component={TextError} />
                    </div>
                    <div className={classes.InputControl}>
                      <label htmlFor="password">Password</label>
                      <Field type="password" id="password" name="password" />
                      <ErrorMessage name="password" component={TextError} />
                    </div>
                    <div className={classes.InputControl}>
                      <label htmlFor="password_confirmation">Repeat Password</label>
                      <Field type="password" id="password_confirmation" name="password_confirmation" />
                      <ErrorMessage name="password_confirmation" component={TextError} />
                    </div>
                    <div className={classes.InputControl}>
                      <div className={classes.ButtonContainer}>
                        <button
                          type="submit"
                          disabled={!formik.isValid || formik.isSubmitting}
                        >
                          Create account
                        </button>
                      </div>
                    </div>
                    {this.props.error ? <div className={classes.Error}>{this.props.error}</div> : null}
                  </div>
                </Form>
              )
            }}
          </Formik>
          {this.props.loading ? (
            <div className={classes.Loading}>
              <Spinner />
            </div>
          ) : null}
        </div>
      )
    }
    return (
      <div className={classes.Register}>
        {login}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    error: state.user.registerError,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleRegistration: (values) => dispatch(actions.handleRegistration(values))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
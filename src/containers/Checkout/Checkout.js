import React, { Component } from 'react';
import classes from './Checkout.module.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from '../../components/TextError/TextError';
import Spinner from '../../components/Spinner/Spinner';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import * as Yup from 'yup';
import * as actions from '../../store/actions/shoppingCart';

class Checkout extends Component {
  initialValues = {
    name: this.props.user.name || '',
    email: this.props.user.email || '',
    phone: '',
    address: '',
    total_price: this.props.totalPrice,
    order_items: this.props.shoppingCart,
    user_id: this.props.userId,
  }

  validationSchema = Yup.object({
    name: Yup.string()
      .required('This field is required!'),
    email: Yup.string()
      .email("Invalid email format!")
      .required('This field is required!'),
    phone: Yup.string()
      .required('This field is required!')
      .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,8}$/, 'Invalid phone format!'),
    address: Yup.string()
      .required('This field is required!'),
  })

  onSubmit = (values, onSubmitProps) => {
    this.props.submitOrder(values);
    onSubmitProps.setSubmitting(false);
  }

  render() {
    if(this.props.shoppingCart.length === 0) {
      return <Redirect to='' />
    }

    if(this.props.message) {
      return <Redirect to='/order-recieved' />
    }
    
    return (
      <div className={classes.Checkout}>
        <div className={classes.Heading}>
          <h4>Delivery details</h4>
        </div>
        <div className={classes.Container}>
          <div className={classes.CheckoutForm}>
            <Formik
              initialValues={this.initialValues}
              validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              {formik => (
                <Form>
                  <div className={classes.Form}>
                    <div className={classes.InputControl}>
                      <label htmlFor="name">Name</label>
                      <Field type="text" id="name" name="name" />
                      <ErrorMessage name="name" component={TextError} />
                    </div>
                    <div className={classes.InputControl}>
                      <label htmlFor="address">Street name and number</label>
                      <Field type="address" id="address" name="address" />
                      <ErrorMessage name="address" component={TextError} />
                    </div>
                    <div className={classes.InputControl}>
                      <label htmlFor="email">Email</label>
                      <Field type="email" id="email" name="email" />
                      <ErrorMessage name="email" component={TextError} />
                    </div>
                    <div className={classes.InputControl}>
                      <label htmlFor="phone">Phone number</label>
                      <Field type="phone" id="phone" name="phone" />
                      <ErrorMessage name="phone" component={TextError} />
                    </div>
                    <div className={classes.InputControl}>
                      <div className={classes.ButtonContainer}>
                        <button
                          type="submit"
                          disabled={!formik.isValid || formik.isSubmitting}
                        >
                          Order
                        </button>
                      </div>
                    </div>
                    {this.props.error ? <div className={classes.Error}>{this.props.error}</div> : null}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <CheckoutSummary
            totalPrice={this.props.totalPrice}
            deliveryPrice={this.props.deliveryPrice}
            totalPriceWithDelivery={this.props.totalPriceWithDelivery}
            converter={this.props.converter}
            link='/shopping-cart'
            text='Shopping cart'
          />
        </div>
        {this.props.loading ? (
            <div className={classes.Loading}>
              <Spinner />
            </div>
          ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart.shoppingCart,
    deliveryPrice: state.shoppingCart.deliveryPrice,
    totalPrice: state.shoppingCart.totalPrice,
    totalPriceWithDelivery: +state.shoppingCart.deliveryPrice + +state.shoppingCart.totalPrice,
    converter: state.shoppingCart.converter,
    message: state.shoppingCart.message,
    userId: state.user.user.id,
    user: state.user.user,
    loading: state.shoppingCart.loading,
    error: state.shoppingCart.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitOrder: (values) => dispatch(actions.submitOrder(values)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
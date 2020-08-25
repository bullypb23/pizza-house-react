import React, { useState, useEffect } from 'react';
import classes from './Contact.module.scss';
import MapComponent from '../MapComponent/MapComponent';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import Spinner from '../Spinner/Spinner';
import * as Yup from 'yup';
import axios from 'axios';
import { MESSAGE_URL } from '../../shared/apiUrls';

const Contact = () => { 
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setMessage('');
    setError('');
  }, [])

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required!').min(2, 'Not long enough!'),
    email: Yup.string().required('Required!').email('Invalid email address!'),
    subject: Yup.string().required('Required!'),
    message: Yup.string().required('Required!')
  })

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
    axios.post(MESSAGE_URL, values)
    .then(response => {
      setMessage(response.data.message);
      onSubmitProps.resetForm();
      onSubmitProps.setSubmitting(false);
    })
    .catch(error => {
      setError(error.response);
      onSubmitProps.setSubmitting(false);
      })
  }

  return (
    <div className={classes.Contact}>
      <div className={classes.MapContainer}>
        <MapComponent />
      </div>
      <div className={classes.Container}>
        <h2>Contact us</h2>
        <Formik 
          initialValues={initialValues} 
          onSubmit={onSubmit} 
          validationSchema={validationSchema}
        >
        {formik => (
          <Form className={classes.Form}>

            <div className={classes.InputControl}>
              <Field type="text" placeholder="Name" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className={classes.InputControl}>
              <Field type="text" placeholder="Email" id="email" name="email" />
              <ErrorMessage name="email" component={TextError} />
            </div>

            <div className={classes.InputControl}>
              <Field type="text" placeholder="Subject" id="subject" name="subject" />
              <ErrorMessage name="subject" component={TextError} />
            </div>

            <div className={classes.InputControl}>
              <Field as="textarea" placeholder="Your message" name="message" rows="5" />
              <ErrorMessage name="message" component={TextError} />
            </div>

            <div className={classes.InputControl}>
              <div className={classes.ButtonContainer}>
                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Send
                </button>
              </div>
            </div>
            {formik.isSubmitting ? (
              <div className={classes.Loading}>
                <Spinner />
              </div>
            ) : null}
          </Form>
        )}
        </Formik>
        {message ? <p className={classes.Success}>{message}</p> : null}
        {error ? <p className={classes.Error}>Something went wronf</p> : null}
      </div>

    </div>
  )
}

export default Contact;
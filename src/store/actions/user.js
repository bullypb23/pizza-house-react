import * as actionTypes from './actionTypes';
import axios from 'axios';
import { LOGIN_URL, REGISTRATION_URL, LOGOUT_URL } from '../../shared/apiUrls';

export const handleRegistration = (values) => {
  return dispatch => {
    axios.post(REGISTRATION_URL, values)
      .then(response => {
        dispatch(handleRegistrationSuccess(response.data));
      })
      .catch(error => {
        dispatch(handleRegistrationSuccess(error.response));
      })
  }
}

export const handleRegistrationSuccess = data => {
  return {
    type: actionTypes.REGISTRATION_SUCCESS,
    data
  }
}

export const handleRegistrationFailed = error => {
  return {
    type: actionTypes.REGISTRATION_SUCCESS,
    error
  }
}

export const handleLogin = (values) => {
  return dispatch => {
    axios.post(LOGIN_URL, values)
      .then(response => {
        dispatch(handleLoginSuccess(response.data));
      })
      .catch(error => {
        dispatch(handleLoginSuccess(error.response));
      })
  }
}

export const handleLoginSuccess = data => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data
  }
}

export const handleLoginFailed = error => {
  return {
    type: actionTypes.LOGIN_FAILED,
    error
  }
}

export const handleLogout = token => {
  return dispatch => {
    axios.post(LOGOUT_URL, {}, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        dispatch(handleLogoutSuccess());
      })
      .catch(error => {
        dispatch(handleLogoutFailed(error.response));
      })
  }
}

export const handleLogoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  }
}

export const handleLogoutFailed = error => {
  return {
    type: actionTypes.LOGOUT_FAILED,
    error
  }
}
import * as actionTypes from './actionTypes';
import { PRODUCT_URL, ORDER_URL } from '../../shared/apiUrls';
import axios from 'axios';

export const fetchProducts = () => {
  return dispatch => {
    axios.get(PRODUCT_URL)
      .then(response => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchProductsFailed(error.response.data.message));
      })
  }
}

export const fetchProductsSuccess = data => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    data
  }
}

export const fetchProductsFailed = error => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    error
  }
}

export const fetchPreviousOrders = token => {
  return dispatch => {
    axios.get(ORDER_URL, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(response => {
      dispatch(fetchPreviousOrdersSuccess(response.data));
    }).catch(error => {
      dispatch(fetchPreviousOrdersFailed(error.response.data.message));
    })
  }
}

export const fetchPreviousOrdersSuccess = data => {
  return {
    type: actionTypes.FETCH_PREVIOUS_ORDERS_SUCCESS,
    data
  }
}

export const fetchPreviousOrdersFailed = error => {
  return {
    type: actionTypes.FETCH_PREVIOUS_ORDERS_FAILED,
    error
  }
}

export const emptyPreviousOrders = () => {
  return {
    type: actionTypes.EMPTY_PREVIOUS_ORDERS,
  }
}

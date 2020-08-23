import * as actionTypes from './actionTypes';
import { PRODUCT_URL } from '../shared/apiUrls';
import axios from 'axios';

export const fetchProducts = () => {
  return dispatch => {
    axios.get(PRODUCT_URL)
      .then(response => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchProductsFailed(error));
      })
  }
}

export const fetchProductsSuccess = data => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    data: data
  }
}

export const fetchProductsFailed = error => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    error: error
  }
}
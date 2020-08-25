import * as actionTypes from './actionTypes';
import axios from 'axios';
import { ORDER_URL } from '../../shared/apiUrls';

export const addToShoppingCart = (id, name, size, price) => {
  return {
    type: actionTypes.ADD_TO_BASKET,
    data: {
      product_id: id,
      name,
      size,
      price,
      quantity: 1
    }
  }
}

export const handleQuantity = (id, value) => {
  return {
    type: actionTypes.QUANTITY_HANDLER,
    id,
    value
  }
}

export const removeItem = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    id,
  }
}

export const fetchCurrencyExchange = () => {
  return dispatch => {
    axios.get('https://api.exchangeratesapi.io/latest')
      .then(response => {
        dispatch(fetchCurrencyExchangeSuccess(response.data.rates.USD))
      })
      .catch(error => {
        dispatch(fetchCurrencyExchangeFailed(error.response))
      })
  }
}

export const fetchCurrencyExchangeSuccess = data => {
  return {
    type: actionTypes.FETCH_CURRENCY_EXCHANGE_SUCCESS,
    data
  }
}

export const fetchCurrencyExchangeFailed = error => {
  return {
    type: actionTypes.FETCH_CURRENCY_EXCHANGE_SUCCESS,
    error
  }
}

export const submitOrder = values => {
  return dispatch => {
    dispatch(startLoadingOrder());
    axios.post(ORDER_URL, values)
    .then(response => {
      dispatch(submitOrderSuccess(response.data.message));
      dispatch(resetShoppingCart());
    })
    .catch(error => {
      dispatch(submitOrderFailed(error.response));
    })
  }
}

export const submitOrderSuccess = message => {
  return {
    type: actionTypes.SUBMIT_ORDER_SUCCESS,
    message
  }
}

export const submitOrderFailed = error => {
  return {
    type: actionTypes.SUBMIT_ORDER_FAILED,
    error
  }
}

export const resetShoppingCart = () => {
  return {
    type: actionTypes.RESET_SHOPPING_CART,
  }
}

export const removeMessage = () => {
  return {
    type: actionTypes.REMOVE_MESSAGE,
  }
}

export const startLoadingOrder = () => {
  return {
    type: actionTypes.START_LOADING_ORDER,
  }
}
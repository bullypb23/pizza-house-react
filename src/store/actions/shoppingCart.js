import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addToShoppingCart = (name, size, price) => {
  return {
    type: actionTypes.ADD_TO_BASKET,
    data: {
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
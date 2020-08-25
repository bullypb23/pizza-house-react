import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
  error: null,
  areProductsLoaded: false,
  previousOrders: [],
  areOrdersLoaded: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data,
        areProductsLoaded: true
      }
    case actionTypes.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.error
      }
    case actionTypes.FETCH_PREVIOUS_ORDERS_SUCCESS:
      return {
        ...state,
        previousOrders: action.data,
        areOrdersLoaded: true,
      }
    case actionTypes.FETCH_PREVIOUS_ORDERS_FAILED:
      return {
        ...state,
        error: action.error,
      }
    case actionTypes.EMPTY_PREVIOUS_ORDERS:
      return {
        ...state,
        previousOrders: [],
        areOrdersLoaded: false,

      }
    default: return state;
  }
}

export default reducer;
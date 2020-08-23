import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
  error: null,
  isProductLoaded: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data,
        isProductLoaded: true
      }
    case actionTypes.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.error
      }
    default: return state;
  }
}

export default reducer;
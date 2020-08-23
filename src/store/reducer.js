import * as actionTypes from './actionTypes';

const initialState = {
  products: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data
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
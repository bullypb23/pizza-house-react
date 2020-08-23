import * as actionTypes from '../actions/actionTypes';

const initialState = {
  shoppingCart: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart,
          { name: action.name, size: action.size, price: +action.price, quantity: 1 }
        ]
      }
    default: return state;
  }
}

export default reducer;
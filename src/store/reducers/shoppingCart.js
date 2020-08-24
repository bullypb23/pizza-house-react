import * as actionTypes from '../actions/actionTypes';

const initialState = {
  shoppingCart: [],
  deliveryPrice: 2,
  totalPrice: 0,
  converter: null,
  error: null,
  message: '',
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart,
          action.data,
        ],
        totalPrice: +state.totalPrice + +action.data.price
      }
    case actionTypes.QUANTITY_HANDLER:
      let updatedShoppingCart = [...state.shoppingCart];
      let updatedShoppingCartId = updatedShoppingCart[action.id];
      updatedShoppingCartId.quantity += +action.value;
      updatedShoppingCart[action.id] = updatedShoppingCartId;
      let newPrice = +state.totalPrice + +action.value * +updatedShoppingCartId.price;
      return {
        ...state,
        shoppingCart: updatedShoppingCart,
        totalPrice: +newPrice.toFixed(2)
      }
    case actionTypes.REMOVE_ITEM:
      let updatedBasket = [...state.shoppingCart];
      let updatedBasketIDs = updatedBasket.filter((item, index) => {
        return index !== Number(action.id)
      });
      return {
        ...state,
        shoppingCart: updatedBasketIDs
      }
    case actionTypes.FETCH_CURRENCY_EXCHANGE_SUCCESS:
      return {
        ...state,
        converter: action.data
      }
    case actionTypes.FETCH_CURRENCY_EXCHANGE_FAILED:
      return {
        ...state,
        error: action.error
      }
    case actionTypes.SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        message: action.message
      }
    case actionTypes.SUBMIT_ORDER_FAILED:
      return {
        ...state,
        error: action.error
      }
    case actionTypes.RESET_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: [],
        totalPrice: 0,
      }
    case actionTypes.REMOVE_MESSAGE:
      return {
        ...state,
        message: '',
      }
    default: return state;
  }
}

export default reducer;
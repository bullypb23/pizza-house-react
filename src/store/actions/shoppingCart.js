import * as actionTypes from './actionTypes';

export const addToShoppingCart = (name, size, price) => {
  return {
    type: actionTypes.ADD_TO_BASKET,
    name,
    size,
    price
  }
}
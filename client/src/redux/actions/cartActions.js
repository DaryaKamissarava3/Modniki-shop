import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART, QUANTITY,
  CHANGE_QUANTITY,
} from './actionTypes';

const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product
});
const changeQuantity=(payload)=>({
  type:CHANGE_QUANTITY,
  payload
})

const clearCart = () => ({
  type: CLEAR_CART,
});

const cartQuantity = (value) => ({
  type: QUANTITY,
  payload:value
});

export default {
  addToCart,
  removeFromCart,
  clearCart,
  cartQuantity,
  changeQuantity,
};
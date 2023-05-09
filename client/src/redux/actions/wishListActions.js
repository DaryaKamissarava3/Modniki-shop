import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST
} from './actionTypes';

const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product
});

const removeFromWishlist = (product) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: product
});

export default {
  addToWishlist,
  removeFromWishlist,
};
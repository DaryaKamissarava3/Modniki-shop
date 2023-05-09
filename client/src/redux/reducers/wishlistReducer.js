import { ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from '../actions/actionTypes';

const initialState = {
  wishlist: [],
}

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist.filter(item => item.id !== action.payload.id)],
      };
    default:
      return state;
  }
}

export default wishlistReducer;
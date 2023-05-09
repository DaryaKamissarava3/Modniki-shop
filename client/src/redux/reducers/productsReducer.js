import { FETCH_DATA } from '../actions/actionTypes'

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;
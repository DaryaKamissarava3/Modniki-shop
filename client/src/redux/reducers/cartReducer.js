import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  CHANGE_QUANTITY
} from '../actions/actionTypes';

const initialState = {
  cart: [],
}

const conditionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart,
          {
            ...action.payload,
            quantity: 1
          }
        ],
      };
    case CHANGE_QUANTITY:
      return {
        ...state,
        cart: [...state.cart.map(item => item.id === action.payload[0] ? {...item, quantity: action.payload[1]} : item)]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter(item => item.id !== action.payload.id)],
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
}

export default conditionsReducer;
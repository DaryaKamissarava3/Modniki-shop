import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
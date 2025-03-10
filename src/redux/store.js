import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import { thunk } from "redux-thunk";
import compareReducer from "./reducers/compareReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  compare: compareReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

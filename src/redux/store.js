import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import { thunk } from "redux-thunk";
import compareReducer from "./reducers/compareReducer";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  compare: compareReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

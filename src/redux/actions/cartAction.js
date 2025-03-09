export const ADD_TO_CART = "ADD_TO_CART";
export const SET_CART = "SET_CART";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product) => (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART, payload: product });

  const { cart } = getState();
  localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
};

export const loadCartFromStorage = () => (dispatch) => {
  const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  dispatch({
    type: SET_CART,
    payload: savedCart,
  });
};

export const decreaseItem = (id) => (dispatch, getState) => {
  dispatch({ type: DECREASE_ITEM, payload: id });

  const { cart } = getState();
  localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });

  const { cart } = getState();
  localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
};

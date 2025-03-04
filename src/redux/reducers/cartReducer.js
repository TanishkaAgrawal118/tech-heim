import {
  ADD_TO_CART,
  SET_CART,
  DECREASE_ITEM,
  REMOVE_FROM_CART,
} from "../actions/cartAction";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cartItems: action.payload };

    case ADD_TO_CART: {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      let updatedCartItems;

      if (existItem) {
        updatedCartItems = state.cartItems.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        updatedCartItems = [...state.cartItems, { ...item, quantity: 1 }];
      }

      return { ...state, cartItems: updatedCartItems };
    }

    case DECREASE_ITEM: {
      const updatedCartItems = state.cartItems
        .map((x) =>
          x.id === action.payload ? { ...x, quantity: x.quantity - 1 } : x
        )
        .filter((x) => x.quantity > 0);

      return { ...state, cartItems: updatedCartItems };
    }

    case REMOVE_FROM_CART: {
      const updatedCartItems = state.cartItems.filter(
        (x) => x.id !== action.payload
      );

      return { ...state, cartItems: updatedCartItems };
    }

    default:
      return state;
  }
};

export default cartReducer;

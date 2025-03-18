import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  FETCH_PRODUCT_BY_ID_FAILURE,
  FETCH_PRODUCT_BY_ID_REQUEST,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  REMOVE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_STATUS,
} from "../actions/productAction";

const initialState = {
  products: [],
  selectedProduct: null,
  product: null,
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_PRODUCT_BY_ID_REQUEST:
      return { ...state, loading: true, product: null, error: null };

    case FETCH_PRODUCT_BY_ID_SUCCESS:
      return { ...state, loading: false, product: action.payload };

    case FETCH_PRODUCT_BY_ID_FAILURE:
      return { ...state, loading: false, product: null, error: action.payload };

    case UPDATE_PRODUCT_STATUS:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.productId
            ? { ...product, status: action.payload.status }
            : product
        ),
      };
    case REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "UPDATE_PRODUCT_REQUEST":
      return { ...state, loading: true };
    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        product: action.payload,
        products: state.products.map((prod) =>
          prod.id === action.payload.id ? action.payload : prod
        ),
      };
    case "UPDATE_PRODUCT_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;

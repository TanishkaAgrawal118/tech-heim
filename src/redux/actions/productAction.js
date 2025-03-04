export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT_BY_ID_REQUEST = 'FETCH_PRODUCT_BY_ID_REQUEST';
export const FETCH_PRODUCT_BY_ID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS';
export const FETCH_PRODUCT_BY_ID_FAILURE = 'FETCH_PRODUCT_BY_ID_FAILURE';

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:5000/products");
            const data = await response.json();
            dispatch({
                type: FETCH_PRODUCTS,
                payload: data
            })
        } catch (error) {
            console.log("Error in fetching products", error);
        }
    }
};

export const fetchProductByIdThunk = (id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_PRODUCT_BY_ID_REQUEST });

        try {
            const response = await fetch(`http://localhost:5000/products/${id}`);
            const product = await response.json();

            dispatch({
                type: FETCH_PRODUCT_BY_ID_SUCCESS,
                payload: product,
            });
        } catch (error) {
            dispatch({
                type: FETCH_PRODUCT_BY_ID_FAILURE,
                payload: error.message,
            });
        }
    };
};
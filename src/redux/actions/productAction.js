export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT_BY_ID_REQUEST = 'FETCH_PRODUCT_BY_ID_REQUEST';
export const FETCH_PRODUCT_BY_ID_SUCCESS = 'FETCH_PRODUCT_BY_ID_SUCCESS';
export const FETCH_PRODUCT_BY_ID_FAILURE = 'FETCH_PRODUCT_BY_ID_FAILURE';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_STATUS = "products/updateProductStatus";

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

export const addProduct = (newProduct) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:5000/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });

            const addedProduct = await response.json();

            dispatch({
                type: ADD_PRODUCT_SUCCESS,
                payload: addedProduct,
            });

            dispatch(fetchProducts());
        } catch (error) {
            console.error("Error adding product", error);
        }
    };
};

export const removeProduct = (id) => {
    return async (dispatch) => {
        try {
            await fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE",
            });

            dispatch({
                type: REMOVE_PRODUCT_SUCCESS,
                payload: id,
            });

            dispatch(fetchProducts());
        } catch (error) {
            console.error("Error removing product", error);
        }
    };
};


export const updateProductStatus = (productId, status) => ({
    type: UPDATE_PRODUCT_STATUS,
    payload: { productId, status }
});

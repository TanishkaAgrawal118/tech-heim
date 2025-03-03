import { ADD_TO_CART } from '../actions/cartAction';

const initialState = {
    items: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default:
            return state;
    }
};

export default cartReducer;

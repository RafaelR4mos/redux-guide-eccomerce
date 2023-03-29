import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
});

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
});

export const incrementProduct = (payload) => ({
    type: CartActionTypes.INCREMENT_PRODUCT,
    payload,
});

export const decrementProduct = (payload) => ({
    type: CartActionTypes.DECREMENT_PRODUCT,
    payload,
});

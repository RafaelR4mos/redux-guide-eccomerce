import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            );

            if (productIsAlreadyInCart) {
                state.products = state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );

                return;
            }

            state.products = [
                ...state.products,
                { ...action.payload, quantity: 1 },
            ];
        },
        incrementProduct: (state, action) => {
            state.products = state.products.map((product) =>
                product.id === action.payload
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );
        },
        decrementProduct: (state, action) => {
            state.products = state.products
                .map((product) =>
                    product.id === action.payload
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                )
                .filter((product) => product.quantity > 0);
        },
        removeProductFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
    },
});

export const {
    addProduct,
    incrementProduct,
    decrementProduct,
    removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;

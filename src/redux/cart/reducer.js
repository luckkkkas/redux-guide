import { CartActionsTypes } from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionsTypes.ADD_PRODUCT:
            const isAlredyInCart = state.products.some(
                (product) => product.id === action.payload.id
            );
            if (isAlredyInCart) {
                return {
                    ...state,
                    products: state.products.map((product) =>
                        product.id === action.payload.id ?
                            { ...product, quantity: product.quantity + 1 }
                            : product
                    )
                }
            }

            return {
                ...state, products: [...state.products, { ...action.payload, quantity: 1 }]
            };

        case CartActionsTypes.REMOVE_PRODUCT:
            return {
                products: state.products.filter((product) =>
                    product.id !== action.payload.id
                )
            };

        case CartActionsTypes.INCREMENT_PRODUCT:
            return { 
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                )
            };

        case CartActionsTypes.DECREMENT_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                ).filter((product) => product.quantity > 0)
            };
        default:
            return state;
    }
}

export default cartReducer;
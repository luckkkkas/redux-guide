import { CartActionsTypes } from "./action-types";

export const addProductToCart = (payload) => ({
    type: CartActionsTypes.ADD_PRODUCT,
    payload,
})

export const removeProductFromCart = (payload) => ({
    type: CartActionsTypes.REMOVE_PRODUCT,
    payload
})

export const incrementProductToCart = (payload) => ({
    type: CartActionsTypes.INCREMENT_PRODUCT,
    payload,
})

export const decrementProductFromCart = (payload) => ({
    type: CartActionsTypes.DECREMENT_PRODUCT,
    payload,
})
import UserActionsTypes from "./actions-types";

export const loginUser = (payload) => ({
    type: UserActionsTypes.LOGIN,
    payload,
})

export const logout = () =>({
    type: UserActionsTypes.LOGOUT
})
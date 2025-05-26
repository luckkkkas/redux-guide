import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.currentUser = action.payload
        },
        logout: (state, action) => {
            state.currentUser = null
        }
    }
});

export const { loginUser, logout } = userSlice.actions;

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn: false,
    userFirstName: null,
    userLastName: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginReducer(state) {
            state.isLoggedIn = true;
        },
        logoutReducer(state) {
            state.isLoggedIn = false;
            state.userFirstName = null;
            state.userLastName = null;
        },
        setUserFirstName(state, action) {
            state.userFirstName = action.payload;
        },
        setUserLastName(state, action) {
            state.userLastName = action.payload;
        }
    }
})


export const {loginReducer, logoutReducer, setUserFirstName, setUserLastName} = authSlice.actions;

export default authSlice.reducer;
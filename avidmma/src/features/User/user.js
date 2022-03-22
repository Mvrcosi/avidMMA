import { createSlice } from '@reduxjs/toolkit'



// Create slice takes in an object that contains the name of the state we are dealing with and the state we would like to initialize the app with. 
// In this case we want to have a user to be null on load if they hadnt logged in



export const userSlice = createSlice({
    name: "user",
    initialState: { user: null, },

    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
        },
        logout: (state) => {
            state.user = null
        }
    }
})




export const { login, logout } = userSlice.actions
export const selectUser = (state) => state.user.user
export default userSlice.reducer;


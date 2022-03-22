import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/User/user'





export const store = configureStore({


    // A reducer is just a funciton that takes in information of current states and an action we want to take on a state. The action returns the new value of the state
    reducer: {
        user: userReducer,
    },

});





// HOLDS ALL THE STATES THAT I WANT TO MAKE GLOBAL. ALL THE STATES WE WOULD LIKE TO BE ABLE TO ACCESS AND MODIFY THROUGHOUT THE APP
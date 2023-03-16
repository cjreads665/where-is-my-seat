//configureStore will help us set up our store
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "./pnrSlice"

//we are exporting the store by default
//if you want, you can also assign it to a variable and then export it
export default configureStore({
    reducer: {
        pnr : dataReducer
    }, //all our reducer functions will go here
});


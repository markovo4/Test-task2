import {configureStore} from "@reduxjs/toolkit";
import localStorageReducer from './slices/localStorageSlice.js';

const store = configureStore({
    reducer: {
        localStorage: localStorageReducer,
    }
})

export default store;
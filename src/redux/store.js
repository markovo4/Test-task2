import {configureStore} from "@reduxjs/toolkit";
import localStorageReducer from './slices/localStorageSlice.js';
import modalsReducer from './slices/modalsSlice';

const store = configureStore({
    reducer: {
        localStorage: localStorageReducer,
        modals: modalsReducer,
    }
})

export default store;
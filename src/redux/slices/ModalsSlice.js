import {createSlice} from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
    name: 'modals',
    initialState: {
        modalAddUserOpen: false,
    },
    reducers: {
        setModalAddUserOpen: state => {
            state.modalAddUserOpen = !state.modalAddUserOpen;
        },
    }
})

export const {
    setModalAddUserOpen
} = modalsSlice.actions;

export default modalsSlice.reducer;
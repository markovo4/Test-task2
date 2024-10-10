import {createSlice} from "@reduxjs/toolkit";
import {USERS_DATA} from "../../utils/constants.js";
import {users} from "../../assets/data.js";

export const localStorageSlice = createSlice({
    name: "localStorage",
    initialState: {
        usersList: [],
    },
    reducers: {
        getUsers: (state) => {
            try {
                const storedData = localStorage.getItem(USERS_DATA);
                state.usersList = JSON.parse(storedData) || [...users]
            } catch (e) {
                console.error("Failed to retrieve users data:", e);
                state.users = [...users];
            }
        },
        setUser: (state, {payload}) => {
            const updatedUsersList = [...users, payload]
            localStorage.setItem(USERS_DATA, JSON.stringify(updatedUsersList))
            state.usersList = updatedUsersList;
        }
    }
})

export const {
    getUsers,
    setUser
} = localStorageSlice.actions;

export default localStorageSlice.reducer;
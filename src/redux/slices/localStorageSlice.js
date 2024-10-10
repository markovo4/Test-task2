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
                state.usersList = JSON.parse(storedData) || [...users];
            } catch (e) {
                console.error("Failed to retrieve users data:", e);
                state.usersList = [...users];
            }
        },
        setUser: (state, {payload}) => {
            const updatedUsersList = [...state.usersList, payload];
            localStorage.setItem(USERS_DATA, JSON.stringify(updatedUsersList));
            state.usersList = updatedUsersList;
        },
        deleteUser: (state, {payload}) => {
            const index = state.usersList.findIndex(user => user.name === payload);
            if (index !== -1) {
                const updatedUsersList = [...state.usersList];
                updatedUsersList.splice(index, 1);
                
                if (updatedUsersList.length === 0) {
                    localStorage.setItem(USERS_DATA, JSON.stringify(users));
                    state.usersList = [...users];
                } else {
                    localStorage.setItem(USERS_DATA, JSON.stringify(updatedUsersList));
                    state.usersList = updatedUsersList;
                }
            } else {
                console.error(`User with name "${payload}" not found.`);
            }
        },
    },
});

export const {getUsers, setUser, deleteUser} = localStorageSlice.actions;

export default localStorageSlice.reducer;

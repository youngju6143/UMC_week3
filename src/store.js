import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSuccess: null,
    AccessToken: "",
    password: '1234',
    userId: "umcweb",
    userName :''
  };

const info = createSlice({
    name :'list',
    initialState,
    reducers: {
        setId(state, action) {
            state.userId = action.payload
        },
        setToken (state, action) {
            state.AccessToken = action.payload
        },
        setName(state, action) {
            state.userName = action.payload
        }
    }
})

export const store = configureStore({
    reducer: {
        info: info.reducer
    }
})
export const {setId, setToken, setName} = info.actions
export default store;


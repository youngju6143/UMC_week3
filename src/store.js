import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSuccess: null,
    AccessToken: "",
    password: '1234',
    userId: "umcweb"
    
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
        }
    }
})

export const store = configureStore({
    reducer: {
        info: info.reducer
    }
})
export const {setId, setToken} = info.actions
export default store;


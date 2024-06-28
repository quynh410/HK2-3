import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
// Tạo kho xuất kho
const store = configureStore({
    reducer: {
        userReducer,
    }
})
export default store;
import { configureStore } from "@reduxjs/toolkit";
import managementReducer from "./reducers/managementReducer";

const store = configureStore({
    reducer:{
        managementReducer,
    }
})
export default store;
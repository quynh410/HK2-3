import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducer/countReducer";
import todoListReducer from "./reducer/todoListReducer";


const store = configureStore({
    reducer: {
        countReducer,
        todoListReducer
    }
})

export default store;
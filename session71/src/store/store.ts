import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducer/countReducer";
import todoListReducer from "./reducer/todoListReducer";
import listNumberReducer from "./reducer/listNumberReducer";
import themeReducer from "./reducer/themeReducer";
import viewModReducer from "./reducer/viewModReducer";


const store = configureStore({
    reducer: {
        countReducer,
        todoListReducer,
        listNumberReducer,
        themeReducer,
        viewModReducer
    }
})

export default store;
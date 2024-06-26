import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import { combineReducers, createStore } from "redux";

const rootReducer= combineReducers({
    productReducer,
    cartReducer
})
// tạo kho
export const store= createStore(rootReducer);
import { createStore , combineReducers} from "redux";
import bookReducer from "./reducers/bookReducer"
const rootReducer = combineReducers ({
    bookReducer
})
export const store = createStore(rootReducer);
// xuất kho ra co app dùng

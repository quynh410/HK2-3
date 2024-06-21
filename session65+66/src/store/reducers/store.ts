import { combineReducers, createStore } from "redux";
import countReducer from './countReducers';
// import jobReducer from './todolistReducer';
import profileReducer from "./profileReducer";
import listUserReducer from "../listUserReducer";
import productReducer from "./productReducer";
import randomNumberReducer from "./randomNumberReducer";
import changeStageReducer from "./changestageReducer";
const rootReducer = combineReducers({
    countReducer,
    // jobReducer
    profileReducer,
    listUserReducer,
    productReducer,
    randomNumberReducer,
    changeStageReducer
})
const store = createStore(rootReducer)
export default store;
import { createStore , combineReducers} from "redux";
import jobReducer from "./reducers/jobReducer";

const rootReducer = combineReducers ({
    jobReducer
})
export const store = createStore(rootReducer);

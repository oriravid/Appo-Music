//ext
import { combineReducers } from "redux";
//int
import sessionErrorsReducer from "./session_errors_reducer";

export default combineReducers({
    session: sessionErrorsReducer,
});

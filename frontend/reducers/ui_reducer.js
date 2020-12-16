//ext
import { combineReducers } from "redux";
//int
import modalReducer from "./modal_reducer";

export default combineReducers({
    modal: modalReducer,
});

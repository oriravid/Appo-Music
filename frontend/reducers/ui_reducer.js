//ext
import { combineReducers } from "redux";
//int
import modalReducer from "./modal_reducer";
import searchReducer from "./search_reducer";

export default combineReducers({
    modal: modalReducer,
    search: searchReducer,
});

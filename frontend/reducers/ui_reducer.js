//ext
import { combineReducers } from "redux";
//int
import modalReducer from "./modal_reducer";
// import loadingReducer from "./loading_reducer";

export default combineReducers({
    modal: modalReducer,
    // loading: loadingReducer,
});

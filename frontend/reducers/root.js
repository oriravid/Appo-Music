//ext
import { combineReducers } from "redux";
//int
import entitiesReducer from "./entities";
import sessionReducer from "./session";

export default combineReducers({
    // entities: entitiesReducer,
    session: sessionReducer,
});

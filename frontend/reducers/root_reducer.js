//ext
import { combineReducers } from "redux";
//int
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import musicReducer from "./music_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    music: musicReducer,
    errors: errorsReducer,
    ui: uiReducer,
});

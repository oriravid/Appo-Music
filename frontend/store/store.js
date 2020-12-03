//ext
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
//int
import rootReducer from "../reducers/root";

export default (preloadedState = {}) =>
    createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(ReduxThunk, logger))
    );

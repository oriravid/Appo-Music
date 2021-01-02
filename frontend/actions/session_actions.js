//int - utils
import * as SessionAPI from "../utils/session_api_utils";
import * as UserAPI from "../utils/user_api_utils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_USER_SETTINGS = "RECEIVE_USER_SETTING";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user: user,
});

export const signoutCurrentUser = () => ({
    type: SIGNOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors,
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
});

export const receiveUserSettings = (settings) => ({
    type: RECEIVE_USER_SETTINGS,
    settings: settings,
});

//Thunk Actions
export const signup = (formUser) => (dispatch) =>
    SessionAPI.postUser(formUser).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (error) => dispatch(receiveErrors(error.responseJSON))
    );

export const signin = (formUser) => (dispatch) =>
    SessionAPI.postSession(formUser).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (error) => dispatch(receiveErrors(error.responseJSON))
    );

export const signout = () => (dispatch) =>
    SessionAPI.deleteSession().then(() => dispatch(signoutCurrentUser()));

export const toggleSetting = (setting) => (dispatch) =>
    UserAPI.toggleSetting(setting).then((settings) =>
        dispatch(receiveUserSettings(settings))
    );

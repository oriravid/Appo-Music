//int - utils
import * as APIUtil from "../utils/session_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user: user,
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors,
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
});

//Thunk Actions
export const signup = (formUser) => (dispatch) =>
    APIUtil.postUser(formUser).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (error) => dispatch(receiveErrors(error.responseJSON))
    );

export const signin = (formUser) => (dispatch) =>
    APIUtil.postSession(formUser).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (error) => dispatch(receiveErrors(error.responseJSON))
    );

export const logout = () => (dispatch) =>
    APIUtil.deleteSession().then(() => dispatch(logoutCurrentUser()));

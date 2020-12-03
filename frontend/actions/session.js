//int - utils
import { postUser, postSession, deleteSession } from "../utils/session";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user: user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

//Thunk Actions
export const createNewUser = (formUser) => (dispatch) =>
    postUser(formUser).then((user) => dispatch(receiveCurrentUser(user)));

export const signin = (formUser) => (dispatch) =>
    postSession(formUser).then((user) => dispatch(receiveCurrentUser(user)));

export const logout = () => (dispatch) =>
    deleteSession().then(() => dispatch(logoutCurrentUser()));

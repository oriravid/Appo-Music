//int
import {
    RECEIVE_USER_PLAYLISTS,
    RECEIVE_NEW_PLAYLIST,
    // CLEAR_USER_PLAYLISTS,
} from "../actions/playlist_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_PLAYLISTS:
            return action.playlists;
        case RECEIVE_NEW_PLAYLIST:
            let nextState = Object.assign({}, state);
            nextState[action.playlist.id] = action.playlist;
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

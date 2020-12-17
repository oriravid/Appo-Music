//int
import {
    RECEIVE_USER_PLAYLISTS,
    RECEIVE_NEW_PLAYLIST,
    UPDATE_PLAYLIST_TITLE,
    REMOVE_PLAYLIST,
} from "../actions/playlist_actions";
import { SIGNOUT_CURRENT_USER } from "../actions/session_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USER_PLAYLISTS:
            return action.playlists;
        case RECEIVE_NEW_PLAYLIST:
            nextState[action.playlist.id] = action.playlist;
            return nextState;
        case UPDATE_PLAYLIST_TITLE:
            nextState[action.playlist.id].title = action.playlist.title;
            return nextState;
        case REMOVE_PLAYLIST:
            delete nextState[action.playlistId];
            return nextState;
        case SIGNOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

//int
import {
    RECEIVE_USER_PLAYLISTS,
    RECEIVE_NEW_PLAYLIST,
    CLEAR_USER_PLAYLISTS,
} from "../actions/playlist_actions";

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_PLAYLISTS:
            return action.playlists;
        case RECEIVE_NEW_PLAYLIST:
            let nextState = Object.assign({}, state);
            nextState[action.playlist.id] = action.playlist;
            return nextState;
        case CLEAR_USER_PLAYLISTS:
            return {};
        default:
            return state;
    }
};

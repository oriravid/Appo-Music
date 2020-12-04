//int
import {
    RECEIVE_USER_PLAYLISTS,
    CLEAR_USER_PLAYLISTS,
} from "../actions/playlist_actions";

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_PLAYLISTS:
            return action.playlists;
        case CLEAR_USER_PLAYLISTS:
            return {};
        default:
            return state;
    }
};

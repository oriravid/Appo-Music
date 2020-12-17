//int
import {
    RECEIVE_ALBUMS,
    RECEIVE_ALBUM_DETAILS,
} from "../actions/album_actions";
import { RECEIVE_ARTIST_DETAILS } from "../actions/artist_actions";
import { RECEIVE_PLAYLIST_DETAILS } from "../actions/playlist_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    var nextState = { ...state };

    switch (action.type) {
        case RECEIVE_ALBUM_DETAILS:
            nextState[action.payload.album.id] = {
                ...state[action.payload.album.id],
                ...action.payload.album,
            };
            return nextState;

        case RECEIVE_ALBUMS:
            return action.payload.albums;

        case RECEIVE_ARTIST_DETAILS:
            return { ...nextState, ...action.payload.albums };

        case RECEIVE_PLAYLIST_DETAILS:
            return action.payload.albums || nextState;

        default:
            return state;
    }
};

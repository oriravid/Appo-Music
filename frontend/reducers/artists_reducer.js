//int
import { RECEIVE_ARTIST_DETAILS } from "../actions/artist_actions";
import {
    RECEIVE_ALBUMS,
    RECEIVE_ALBUM_DETAILS,
} from "../actions/album_actions";
import { RECEIVE_PLAYLIST_DETAILS } from "../actions/playlist_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    var nextState = { ...state };

    switch (action.type) {
        case RECEIVE_ARTIST_DETAILS:
            nextState[action.payload.artist.id] = {
                ...state[action.payload.artist.id],
                ...action.payload.artist,
            };
            return nextState;

        case RECEIVE_ALBUM_DETAILS:
            nextState[action.payload.artist.id] = {
                ...state[action.payload.artist.id],
                ...action.payload.artist,
            };
            return nextState;

        case RECEIVE_ALBUMS:
            return { ...action.payload.artists, ...state };

        case RECEIVE_PLAYLIST_DETAILS:
            return action.payload.artists || nextState;

        default:
            return state;
    }
};

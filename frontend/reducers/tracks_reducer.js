//int
import {
    RECEIVE_ALBUMS,
    RECEIVE_ALBUM_DETAILS,
} from "../actions/album_actions";
import { RECEIVE_ARTIST_DETAILS } from "../actions/artist_actions";

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALBUM_DETAILS:
            return action.payload.tracks;

        case RECEIVE_ARTIST_DETAILS:
            return action.payload.tracks;

        case RECEIVE_ALBUMS:
            return action.payload.tracks;

        default:
            return state;
    }
};

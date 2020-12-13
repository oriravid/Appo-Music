//int
import { RECEIVE_ALBUM_DETAILS } from "../actions/album_actions";
import { RECEIVE_ARTIST_DETAILS } from "../actions/artist_actions";
import { CLEAR_TRACKS } from "../actions/track_actions";

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALBUM_DETAILS:
            return action.payload.tracks;

        case RECEIVE_ARTIST_DETAILS:
            return action.payload.tracks;

        case CLEAR_TRACKS:
            return {};

        default:
            return state;
    }
};

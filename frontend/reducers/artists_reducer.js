//int
import {
    RECEIVE_ALBUMS,
    RECEIVE_ALBUM_DETAILS,
} from "../actions/album_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUMS:
            return Object.assign({}, state, action.payload.artists);
        case RECEIVE_ALBUM_DETAILS:
            let nextState = Object.assign({}, state);
            nextState[action.payload.artist.id] = action.payload.artist;
            return nextState;
        default:
            return state;
    }
};

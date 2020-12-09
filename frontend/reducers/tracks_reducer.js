//int
import { RECEIVE_ALBUM_DETAILS } from "../actions/album_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUM_DETAILS:
            return action.payload.tracks;
        default:
            return state;
    }
};

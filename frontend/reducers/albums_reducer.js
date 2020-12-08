//int
import { RECEIVE_ALBUMS } from "../actions/album_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUMS:
            return action.payload.albums;
        default:
            return state;
    }
};

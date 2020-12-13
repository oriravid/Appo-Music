//int
import { RECEIVE_ALBUM_DETAILS } from "../actions/album_actions";
import { RECEIVE_ARTIST_DETAILS } from "../actions/artist_actions";
import { CLEAR_TRACKS } from "../actions/track_actions";
import { RECEIVE_SAVE, REMOVE_SAVE } from "../actions/save_actions";
import { SIGNOUT_CURRENT_USER } from "../actions/session_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    var nextState = { ...state };

    switch (action.type) {
        case RECEIVE_ALBUM_DETAILS:
            return action.payload.tracks;

        case RECEIVE_ARTIST_DETAILS:
            return action.payload.tracks;

        case RECEIVE_SAVE:
            nextState[action.trackId].saved = true;
            return nextState;

        case REMOVE_SAVE:
            nextState[action.trackId].saved = false;
            return nextState;

        case SIGNOUT_CURRENT_USER:
            nextState = {};
            return nextState;

        case CLEAR_TRACKS:
            return {};

        default:
            return state;
    }
};

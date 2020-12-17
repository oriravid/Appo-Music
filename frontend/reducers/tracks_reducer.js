//int
import { RECEIVE_ALBUM_DETAILS } from "../actions/album_actions";
import { RECEIVE_ARTIST_DETAILS } from "../actions/artist_actions";
import { RECEIVE_SAVE, REMOVE_SAVE } from "../actions/track_actions";
import {
    RECEIVE_PLAYLIST_TRACK,
    REMOVE_PLAYLIST_TRACK,
} from "../actions/playlist_actions";
import { RECEIVE_PLAYLIST_DETAILS } from "../actions/playlist_actions";

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

        case RECEIVE_PLAYLIST_TRACK:
            return nextState;

        case REMOVE_PLAYLIST_TRACK:
            delete nextState[action.trackId];
            return nextState;

        case RECEIVE_PLAYLIST_DETAILS:
            return action.payload.tracks || nextState;

        default:
            return state;
    }
};

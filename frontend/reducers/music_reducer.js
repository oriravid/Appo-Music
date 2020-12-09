//int
import {
    ADD_TRACK,
    ADD_TRACKS,
    PLAY,
    PAUSE,
    NEXT,
    PREV,
} from "../actions/music_actions";

const initialState = {
    on: false,
    queue: [],
    index: 0,
    currentTrack: null,
    playing: false,
};

export default (state = initialState, action) => {
    Object.freeze(state);
    let nextState = { ...state };

    switch (action.type) {
        case ADD_TRACKS:
            nextState.on = true;
            nextState.queue = action.tracks;
            nextState.index = 0;
            nextState.currentTrack = nextState.queue[nextState.index];
            nextState.playing = true;
            return nextState;
        case PLAY:
            if (state.queue.length) {
                nextState.on = true;
                nextState.playing = true;
                return nextState;
            } else {
                return nextState;
            }
        case PAUSE:
            nextState.playing = false;
            return nextState;
        case NEXT:
            if (state.index + 1 < state.queue.length) {
                nextState.index += 1;
                nextState.currentTrack = state.queue[nextState.index];
                return nextState;
            } else {
                return initialState;
            }
        case PREV:
            if (state.index - 1 >= 0) {
                nextState.index -= 1;
                nextState.currentTrack = state.queue[nextState.index];
                return nextState;
            } else {
                return initialState;
            }
        default:
            return state;
    }
};

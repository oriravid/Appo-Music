//int
import {
    ADD_TRACK,
    ADD_TRACKS,
    PLAY,
    PAUSE,
    NEXT,
    PREVIOUS,
} from "../actions/music_actions";

const initialState = {
    on: false,
    playing: false,
    queueIndex: 0,
    queue: [],
};

export default (state = initialState, action) => {
    Object.freeze(state);
    let nextState = { ...state };

    switch (action.type) {
        case ADD_TRACK:
            nextState.on = true;
            nextState.playing = true;
            nextState.queueIndex = 0;
            nextState.queue.unshift(action.track);
            return nextState;
        case ADD_TRACKS:
            nextState.on = true;
            nextState.playing = true;
            nextState.queueIndex = 0;
            nextState.queue = action.tracks;
            return nextState;
        case PLAY:
            nextState.playing = true;
            return nextState;
        case PAUSE:
            nextState.playing = false;
            return nextState;
        case NEXT:
            if (nextState.queueIndex + 1 >= nextState.queue.length) {
                return initialState;
            } else {
                nextState.queueIndex += 1;
                return nextState;
            }
        case PREVIOUS:
            if (nextState.queueIndex - 1 < 0) {
                return initialState;
            } else {
                nextState.queueIndex -= 1;
                return nextState;
            }
        default:
            return state;
    }
};

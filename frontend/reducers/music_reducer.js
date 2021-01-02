//int - actions
import {
    ADD_TRACK,
    ADD_TRACKS,
    PLAY,
    PAUSE,
    TOGGLE,
    NEXT,
    PREV,
    TOGGLE_LOOP,
    TOGGLE_SHUFFLE,
} from "../actions/music_actions";
import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_SETTINGS,
    SIGNOUT_CURRENT_USER,
} from "../actions/session_actions";
//int - util
import { indexPicker } from "../utils/various";

const initialState = {
    on: false,
    queue: [],
    index: 0,
    playedIndecies: [],
    currentTrack: null,
    playing: false,
    loop: false,
    shuffle: false,
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
                nextState.currentTrack = nextState.queue[nextState.index];
                nextState.playing = true;
                return nextState;
            } else {
                return nextState;
            }

        case PAUSE:
            nextState.playing = false;
            return nextState;

        case TOGGLE:
            nextState.playing = !state.playing;
            return nextState;

        case NEXT:
            if (state.on) {
                nextState.playing = true;
                if (state.playedIndecies.length < state.queue.length - 1) {
                    var nsPlayedIndecies = state.playedIndecies;
                    nsPlayedIndecies.push(state.index);
                    nextState.playedIndecies = nsPlayedIndecies;

                    if (state.shuffle) {
                        nextState.index = indexPicker(
                            state.queue.length,
                            nsPlayedIndecies
                        );
                    } else {
                        nextState.index += 1;
                    }

                    nextState.currentTrack = state.queue[nextState.index];
                    return nextState;
                } else {
                    nextState.index = 0;
                    nextState.playedIndecies = [];

                    if (state.loop) {
                        nextState.currentTrack = state.queue[nextState.index];
                        return nextState;
                    } else {
                        nextState.on = false;
                        nextState.currentTrack = null;
                        nextState.playing = false;
                        return nextState;
                    }
                }
            } else {
                return nextState;
            }

        case PREV:
            if (state.on) {
                nextState.playing = true;
                if (state.playedIndecies.length > 0) {
                    var nsPlayedIndecies = state.playedIndecies;
                    var lastIndex = nsPlayedIndecies.pop();
                    nextState.playedIndecies = nsPlayedIndecies;

                    nextState.index = lastIndex;

                    nextState.currentTrack = state.queue[nextState.index];
                    return nextState;
                } else {
                    nextState.on = false;
                    nextState.currentTrack = null;
                    nextState.playing = false;
                    return nextState;
                }
            } else {
                return nextState;
            }

        case TOGGLE_LOOP:
            nextState.loop = !state.loop;
            return nextState;

        case TOGGLE_SHUFFLE:
            nextState.shuffle = !state.shuffle;
            return nextState;

        case RECEIVE_CURRENT_USER:
            nextState.loop = action.user.settings.loop;
            nextState.shuffle = action.user.settings.shuffle;
            return nextState;

        case RECEIVE_USER_SETTINGS:
            nextState.loop = action.settings.loop;
            nextState.shuffle = action.settings.shuffle;
            return nextState;

        case SIGNOUT_CURRENT_USER:
            nextState.loop = false;
            nextState.shuffle = false;
            return nextState;

        default:
            return state;
    }
};

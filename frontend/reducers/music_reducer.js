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
    playing: false,
    queueIndex: 0,
    queue: [
        {
            album_id: 1,
            title: "hello",
            url:
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        },
        {
            album_id: 1,
            title: "asdasdas",
            url:
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        },
    ],
    // time: {
    //     current: null,
    //     max: null,
    // },
};

export default (state = initialState, action) => {
    Object.freeze(state);
    let nextState = { ...state };

    switch (action.type) {
        case ADD_TRACK:
            nextState.queue.unshift(action.track);
            nextState.playing = true;
            return nextState;
        case ADD_TRACKS:
            nextState.queue = action.tracks;
            nextState.playing = true;
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

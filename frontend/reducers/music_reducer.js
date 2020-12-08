//int
import { ADD_TRACK, ADD_TRACKS, PLAY, PAUSE } from "../actions/music_actions";

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
    ],
    shuffle: false,
    repeat: false,
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
        default:
            return state;
    }
};

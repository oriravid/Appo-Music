export const ADD_TRACK = "ADD_TRACK";
export const ADD_TRACKS = "ADD_TRACKS";
export const PLAY = "PLAY";
export const PAUSE = "PAUSE";
export const NEXT = "NEXT";
export const PREV = "PREV";
export const TOGGLE_LOOP = "TOGGLE_LOOP";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";

export const addTrack = (track) => ({
    type: ADD_TRACK,
    track: track,
});

export const addTracks = (tracks) => ({
    type: ADD_TRACKS,
    tracks: tracks,
});

export const play = () => ({
    type: PLAY,
});

export const pause = () => ({
    type: PAUSE,
});

export const next = () => ({
    type: NEXT,
});

export const prev = () => ({
    type: PREV,
});

export const toggleLoop = () => ({
    type: TOGGLE_LOOP,
});

export const toggleShuffle = () => ({
    type: TOGGLE_SHUFFLE,
});

export const ADD_TRACK = "ADD_TRACK";
export const ADD_TRACKS = "ADD_TRACKS";
export const PLAY = "PLAY";
export const PAUSE = "PAUSE";

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

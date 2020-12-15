//int - utils
import * as TracksAPI from "../utils/tracks_api_utils";

export const RECEIVE_SAVE = "RECEIVE_SAVE";
export const REMOVE_SAVE = "REMOVE_SAVE";

export const receiveSave = (trackId) => ({
    type: RECEIVE_SAVE,
    trackId: trackId,
});

export const removeSave = (trackId) => ({
    type: REMOVE_SAVE,
    trackId: trackId,
});

// Thunk Actions
export const saveTrack = (trackId) => (dispatch) =>
    TracksAPI.saveTrack(trackId).then((trackId) =>
        dispatch(receiveSave(trackId))
    );

export const unsaveTrack = (trackId) => (dispatch) =>
    TracksAPI.unsaveTrack(trackId).then((trackId) =>
        dispatch(removeSave(trackId))
    );

//int - utils
import * as PlaylistsAPI from "../utils/playlists_api_utils";

export const RECEIVE_USER_PLAYLISTS = "RECEIVE_USER_PLAYLISTS";
export const CLEAR_USER_PLAYLISTS = "CLEAR_USER_PLAYLISTS";

export const receiveUserPlaylists = (playlists) => ({
    type: RECEIVE_USER_PLAYLISTS,
    playlists: playlists,
});

export const clearUserPlaylists = () => ({
    type: CLEAR_USER_PLAYLISTS,
});

// Thunk Actions
export const getUserPlaylists = (userId) => (dispatch) =>
    PlaylistsAPI.getUserPlaylists(userId).then((playlists) =>
        dispatch(receiveUserPlaylists(playlists))
    );

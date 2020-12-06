//int - utils
import * as PlaylistsAPI from "../utils/playlists_api_utils";

export const RECEIVE_USER_PLAYLISTS = "RECEIVE_USER_PLAYLISTS";
export const RECEIVE_NEW_PLAYLIST = "RECEIVE_NEW_PLAYLIST";
// export const CLEAR_USER_PLAYLISTS = "CLEAR_USER_PLAYLISTS";

export const receiveUserPlaylists = (playlists) => ({
    type: RECEIVE_USER_PLAYLISTS,
    playlists: playlists,
});

export const receiveNewPlaylist = (playlist) => ({
    type: RECEIVE_NEW_PLAYLIST,
    playlist: playlist,
});

// export const clearUserPlaylists = () => ({
//     type: CLEAR_USER_PLAYLISTS,
// });

// Thunk Actions
export const getUserPlaylists = (userId) => (dispatch) =>
    PlaylistsAPI.getUserPlaylists(userId).then((playlists) =>
        dispatch(receiveUserPlaylists(playlists))
    );

export const createNewPlaylist = (playlist) => (dispatch) =>
    PlaylistsAPI.createNewPlaylist(playlist).then((playlist) =>
        dispatch(receiveNewPlaylist(playlist))
    );

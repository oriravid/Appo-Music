//int - utils
import * as PlaylistsAPI from "../utils/playlists_api_utils";

export const RECEIVE_USER_PLAYLISTS = "RECEIVE_USER_PLAYLISTS";
export const RECEIVE_NEW_PLAYLIST = "RECEIVE_NEW_PLAYLIST";
export const RECEIVE_PLAYLIST_DETAILS = "RECEIVE_PLAYLIST_DETAILS";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const RECEIVE_PLAYLIST_TRACK = "RECEIVE_PLAYLIST_TRACK";
export const REMOVE_PLAYLIST_TRACK = "REMOVE_PLAYLIST_TRACK";

export const receiveUserPlaylists = (playlists) => ({
    type: RECEIVE_USER_PLAYLISTS,
    playlists: playlists,
});

export const receiveNewPlaylist = (playlist) => ({
    type: RECEIVE_NEW_PLAYLIST,
    playlist: playlist,
});

export const removePlaylist = (playlistId) => ({
    type: REMOVE_PLAYLIST,
    playlistId: playlistId,
});

export const receivePlaylistDetails = (payload) => ({
    type: RECEIVE_PLAYLIST_DETAILS,
    payload: payload,
});

export const receivePlaylistTrack = (trackId) => ({
    type: RECEIVE_PLAYLIST_TRACK,
    trackId: trackId,
});

export const removePlaylistTrack = (trackId) => ({
    type: REMOVE_PLAYLIST_TRACK,
    trackId: trackId,
});

// Thunk Actions

export const createNewPlaylist = (playlist) => (dispatch) =>
    PlaylistsAPI.createNewPlaylist(playlist).then((playlist) =>
        dispatch(receiveNewPlaylist(playlist))
    );

export const updatePlaylist = (playlist) => (dispatch) =>
    PlaylistsAPI.updatePlaylist(playlist).then((playlist) =>
        dispatch(receiveNewPlaylist(playlist))
    );

export const deletePlaylist = (playlistId) => (dispatch) =>
    PlaylistsAPI.deletePlaylist(playlistId).then((playlistId) =>
        dispatch(removePlaylist(playlistId))
    );

export const getUserPlaylists = () => (dispatch) =>
    PlaylistsAPI.getUserPlaylists().then((playlists) =>
        dispatch(receiveUserPlaylists(playlists))
    );

export const getPlaylistDetails = (playlistId) => (dispatch) =>
    PlaylistsAPI.getPlaylistDetails(playlistId).then((payload) =>
        dispatch(receivePlaylistDetails(payload))
    );

export const addTrackToPlaylist = (trackId, playlistId) => (dispatch) =>
    PlaylistsAPI.addTrackToPlaylist(trackId, playlistId).then((trackId) =>
        dispatch(receivePlaylistTrack(trackId))
    );

export const removeTrackFromPlaylist = (trackId, playlistId) => (dispatch) =>
    PlaylistsAPI.removeTrackFromPlaylist(trackId, playlistId).then((trackId) =>
        dispatch(removePlaylistTrack(trackId))
    );

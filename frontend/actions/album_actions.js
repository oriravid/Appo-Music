//int - utils
import * as AlbumsAPI from "../utils/albums_api_utils";

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM_DETAILS = "RECEIVE_ALBUM_DETAILS";

export const receiveAlbums = (payload) => ({
    type: RECEIVE_ALBUMS,
    payload: payload,
});

export const receiveAlbumDetails = (payload) => ({
    type: RECEIVE_ALBUM_DETAILS,
    payload: payload,
});

//Thunk Actions
export const getAllAlbums = () => (dispatch) =>
    AlbumsAPI.getAllAlbums().then((payload) =>
        dispatch(receiveAlbums(payload))
    );

export const getUserAlbums = (userId) => (dispatch) =>
    AlbumsAPI.getUserAlbums(userId).then((payload) =>
        dispatch(receiveAlbums(payload))
    );

export const getAlbumDetails = (albumId) => (dispatch) =>
    AlbumsAPI.getAlbumDetails(albumId).then((payload) =>
        dispatch(receiveAlbumDetails(payload))
    );

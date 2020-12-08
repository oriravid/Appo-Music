//int - utils
import * as AlbumsAPI from "../utils/albums_api_utils";

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";

export const receiveAlbums = (payload) => ({
    type: RECEIVE_ALBUMS,
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

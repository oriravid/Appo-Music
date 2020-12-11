//int - utils
import * as ArtistsAPI from "../utils/artists_api_utils";

export const RECEIVE_ARTIST_DETAILS = "RECEIVE_ARTIST_DETAILS";

export const receiveArtistDetails = (payload) => ({
    type: RECEIVE_ARTIST_DETAILS,
    payload: payload,
});

//Thunk Actions
export const getArtistDetails = (artistId) => (dispatch) =>
    ArtistsAPI.getArtistDetails(artistId).then((payload) =>
        dispatch(receiveArtistDetails(payload))
    );

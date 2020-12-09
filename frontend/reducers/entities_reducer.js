//ext
import { combineReducers } from "redux";
//int
import artistsReducer from "./artists_reducer";
import albumsReducer from "./albums_reducer";
import tracks_reducer from "./tracks_reducer";
import playlistsReducer from "./playlists_reducer";

export default combineReducers({
    artists: artistsReducer,
    albums: albumsReducer,
    tracks: tracks_reducer,
    playlists: playlistsReducer,
});

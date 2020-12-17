//ext
import { combineReducers } from "redux";
//int
import artistsReducer from "./artists_reducer";
import albumsReducer from "./albums_reducer";
import tracksReducer from "./tracks_reducer";
import playlistsReducer from "./playlists_reducer";

export default combineReducers({
    artists: artistsReducer,
    albums: albumsReducer,
    tracks: tracksReducer,
    playlists: playlistsReducer,
    playlistTracks: playlistTracksReducer,
});

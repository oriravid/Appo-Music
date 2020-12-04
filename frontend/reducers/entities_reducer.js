//ext
import { combineReducers } from "redux";
//int
import artists from "./artists_reducer";
import playlists from "./playlists_reducer";

export default combineReducers({
    artists,
    playlists,
});

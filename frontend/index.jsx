//ext
import React from "react";
import ReactDOM from "react-dom";
//int
import createStore from "./store/store";
import Root from "./components/root";

//testing!!
import { postUser } from "./utils/session_api_utils";
import {
    getAllAlbums,
    getUserAlbums,
    getAlbumDetails,
} from "./actions/album_actions";
import { updatePlaylist, deletePlaylist } from "./actions/playlist_actions";
import { addTrack, addTracks, play, pause } from "./actions/music_actions";

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = undefined;

    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser,
            },
        };
        delete window.currentUser;
    }

    const store = createStore(preloadedState);
    ReactDOM.render(<Root store={store} />, document.getElementById("root"));

    //testing!!!
    window.store = store;
    window.postUser = postUser;
    window.updatePlaylist = updatePlaylist;
    window.deletePlaylist = deletePlaylist;
    window.addTrack = addTrack;
    window.addTracks = addTracks;
    window.play = play;
    window.pause = pause;
    window.getAlbumDetails = getAlbumDetails;
});

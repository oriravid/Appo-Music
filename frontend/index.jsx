//ext
import React from "react";
import ReactDOM from "react-dom";
//int
import createStore from "./store/store";
import Root from "./components/root";

//test
import {
    postPlaylist,
    patchPlaylist,
    getSinglePlaylist,
    getAllPlaylists,
    deleteSinglePlaylist,
} from "./utils/playlists_util";

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = undefined;

    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser,
            },
            ui: {
                modal: false,
            },
        };
        delete window.currentUser;
    }

    const store = createStore(preloadedState);
    ReactDOM.render(<Root store={store} />, document.getElementById("root"));

    //testing!!!
    window.store = store;
    window.postPlaylist = postPlaylist;
    window.patchPlaylist = patchPlaylist;
    window.getSinglePlaylist = getSinglePlaylist;
    window.getAllPlaylists = getAllPlaylists;
    window.deleteSinglePlaylist = deleteSinglePlaylist;
});

//ext
import React from "react";
import ReactDOM from "react-dom";
//int
import createStore from "./store/store";
import Root from "./components/root";

//testing!
import {
    addTrackToPlaylist,
    removeTrackFromPlaylist,
} from "./utils/playlists_api_utils";

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
    window.addTrackToPlaylist = addTrackToPlaylist;
    window.removeTrackFromPlaylist = removeTrackFromPlaylist;
});

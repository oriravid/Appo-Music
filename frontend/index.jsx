//ext
import React from "react";
import ReactDOM from "react-dom";
//int
import createStore from "./store/store";
import Root from "./components/root";

//testing!!
import { dateSorter } from "./utils/various";
import { getAlbumTracks } from "./utils/tracks_api_utils";
// import { saveTrack, unsaveTrack } from "./utils/user_api_utils";

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
    window.dateSorter = dateSorter;
    window.getAlbumTracks = getAlbumTracks;
    // window.saveTrack = saveTrack;
    window.unsaveTrack = unsaveTrack;
});

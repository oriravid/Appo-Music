//ext
import React from "react";

const TrackMenu = ({ trackId, location }) => {
    if (location === "album") {
        var plOption = "Add to Playlist";
    } else if (location === "playlist") {
        var plOption = "Remove from Playlist";
    }

    return (
        <ul className="track-menu">
            <li className="track-menu-item">{plOption}</li>
        </ul>
    );
};

export default TrackMenu;

//ext
import React from "react";

const TrackMenu = ({ trackId, location }) => {
    if (location === "album") {
        var optionA = "Add to Playlist";
        var optionB = "Remove from Library";
    } else if (location === "playlist") {
        var optionA = "Remove from Playlist";
    }

    return (
        <ul className="track-menu">
            <li className="track-menu-item">{optionA}</li>
            <li className="track-menu-item">{optionB}</li>
        </ul>
    );
};

export default TrackMenu;

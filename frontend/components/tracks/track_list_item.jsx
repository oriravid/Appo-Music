//ext
import React from "react";
//int - utils
import * as icons from "../../utils/icons";

const TrackListItem = ({ track, index, handlePlay, hovered }) => {
    if (hovered) {
        var leftcol = "play";
        var rightcol = "...";
    } else {
        var leftcol = index;
        var rightcol = track.duration;
    }

    return (
        <React.Fragment>
            <div className="track-index pointer" onClick={handlePlay}>
                {leftcol}
            </div>
            <div className="track-title">{track.title}</div>
            <div className="track-save">{icons.add}</div>
            <div className="track-duration">{rightcol}</div>
        </React.Fragment>
    );
};

export default TrackListItem;

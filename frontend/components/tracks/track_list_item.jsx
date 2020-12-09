//ext
import React from "react";
//int - utils
import * as icons from "../../utils/icons";

const TrackListItem = ({ track, index, handlePlay, hovered, selected }) => {
    var leftcol = index;
    var addcol = icons.add("icon color");
    var rightcol = track.duration;

    if (hovered) {
        if (selected) {
            var leftcol = icons.play("icon white");
            var addcol = icons.add("icon white");
            var rightcol = icons.list("icon white");
        } else {
            var leftcol = icons.play("icon color");
            var rightcol = icons.list("icon color");
        }
    }

    return (
        <React.Fragment>
            <div className="track-index pointer" onClick={handlePlay}>
                {leftcol}
            </div>
            <div className="track-title">{track.title}</div>
            <div className="track-save">{addcol}</div>
            <div className="track-duration">{rightcol}</div>
        </React.Fragment>
    );
};

export default TrackListItem;

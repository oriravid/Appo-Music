//ext
import React from "react";
//int - utils
import * as icons from "../../utils/icons";

const TrackListItem = ({ track, index }) => {
    return (
        <React.Fragment>
            <div className="track-index">{index}</div>
            <div className="track-title">{track.title}</div>
            <div className="track-save">{icons.add}</div>
            <div className="track-duration">{track.duration}</div>
        </React.Fragment>
    );
};

export default TrackListItem;

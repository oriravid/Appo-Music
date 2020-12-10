//ext
import React from "react";
import { connect } from "react-redux";
//int - actions
import { pause, play } from "../../actions/music_actions";
//int - utils
import * as icons from "../../utils/icons";

const TrackListItem = ({
    track,
    index,
    resume,
    pause,
    handlePlay,
    hovered,
    selected,
    currentTrack,
    playing,
    currentUser,
}) => {
    var leftcol = index;
    var addcol = icons.add("icon ms color");
    var rightcol = track.duration;

    if (hovered) {
        if (selected) {
            var leftcol = icons.play("icon ms white", handlePlay);
            var addcol = icons.add("icon ms white");
            var rightcol = icons.list("icon ms white");
        } else {
            var leftcol = icons.play("icon ms color", handlePlay);
            var rightcol = icons.list("icon ms color");
        }
    } else {
        if (selected) {
            var addcol = icons.add("icon ms white");
        }
    }

    if (currentTrack) {
        if (currentTrack.id == track.id) {
            if (playing) {
                if (selected) {
                    leftcol = icons.pause("icon ms white", pause);
                } else {
                    leftcol = icons.pause("icon ms color", pause);
                }
            } else {
                if (selected) {
                    leftcol = icons.play("icon ms white", resume);
                } else {
                    leftcol = icons.play("icon ms color", resume);
                }
            }
        }
    }

    return (
        <React.Fragment>
            <div className="track-index pointer">{leftcol}</div>
            <div className="track-title">{track.title}</div>
            <div className="track-save">{addcol}</div>
            <div className="track-duration">{rightcol}</div>
        </React.Fragment>
    );
};

const mapSTP = (state) => ({
    currentUser: state.session.currentUser,
    currentTrack: state.music.currentTrack,
    playing: state.music.playing,
});

const mapDTP = (dispatch) => ({
    pause: () => dispatch(pause()),
    resume: () => dispatch(play()),
});

export default connect(mapSTP, mapDTP)(TrackListItem);

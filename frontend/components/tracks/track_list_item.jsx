//ext
import React from "react";
import { connect } from "react-redux";
//int - actions
import { pause, play } from "../../actions/music_actions";
import { saveTrack, unsaveTrack } from "../../actions/track_actions";
import { openModal } from "../../actions/modal_actions";
//int - utils
import * as icons from "../../utils/icons";

const TrackListItem = (props) => {
    const { track, hovered, selected, playing } = props;
    const { resume, pause, handlePlay } = props;
    const { saveTrack, unsaveTrack, handleMenuOpen, openModal } = props;
    const { currentTrack, currentUser } = props;

    let classes;
    selected
        ? (classes = "icon ms white pointer")
        : (classes = "icon ms color pointer");

    let addAction;
    let playlistAction;
    currentUser
        ? ((addAction = () => saveTrack(track.id)),
          (playlistAction = handleMenuOpen))
        : ((addAction = () => openModal("signin")),
          (playlistAction = () => openModal("signin")));

    var colA = track.trackNumber;
    var colB = track.title;

    let colC;
    track.saved ? (colC = "") : (colC = icons.add(classes, addAction));

    var colD = track.duration;

    if (track.saved) {
    }

    if (hovered) {
        colA = icons.play(classes, handlePlay);

        if (track.saved) {
            colC = icons.close("icon sm red pointer", () =>
                unsaveTrack(track.id)
            );
        }

        colD = icons.list(classes, playlistAction);
    }

    if (currentTrack && currentTrack.id == track.id) {
        playing
            ? (colA = icons.pause(classes, pause))
            : (colA = icons.play(classes, resume));
    }

    return (
        <React.Fragment>
            <div className="track-index">{colA}</div>
            <div className="track-title">{colB}</div>
            <div className="track-save ">{colC}</div>
            <div className="track-duration">{colD}</div>
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
    saveTrack: (trackId) => dispatch(saveTrack(trackId)),
    unsaveTrack: (trackId) => dispatch(unsaveTrack(trackId)),
    openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapSTP, mapDTP)(TrackListItem);

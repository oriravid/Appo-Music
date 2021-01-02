//ext
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//int - actions
import { pause, play } from "../../actions/music_actions";
import { saveTrack, unsaveTrack } from "../../actions/track_actions";
import { openModal } from "../../actions/modal_actions";
//int - utils
import * as icons from "../../utils/icons";

const TrackListItem = (props) => {
    const { track, album, artist } = props;
    const { location, hovered, selected, playing } = props;
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

    let colC, colCClasses;

    if (location === "album") {
        colCClasses = "track-save";
        track.saved ? (colC = "") : (colC = icons.add(classes, addAction));
    } else if (location === "playlist") {
        colCClasses = "track-info";
        colC = (
            <React.Fragment>
                <span>
                    <Link to={`/albums/${album.id}`}>{album.title}</Link>
                </span>
                <span>
                    <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                </span>
            </React.Fragment>
        );
    }

    var colD = track.duration;

    if (hovered) {
        colA = icons.play(classes, handlePlay);

        if (location === "album" && track.saved) {
            if (selected) {
                colC = icons.close("icon sm white pointer", () =>
                    unsaveTrack(track.id)
                );
            } else {
                colC = icons.close("icon sm red pointer", () =>
                    unsaveTrack(track.id)
                );
            }
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
            <div className={colCClasses}>{colC}</div>
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

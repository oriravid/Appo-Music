//ext
import React from "react";
import { connect } from "react-redux";
//int
import {
    addTrackToPlaylist,
    removeTrackFromPlaylist,
} from "../../actions/playlist_actions";

const TrackMenu = ({
    trackId,
    playlistId,
    location,
    playlists,
    addTrackToPlaylist,
    removeTrackFromPlaylist,
    handleMenuClose,
}) => {
    if (location === "album") {
        const playlistList = playlists.map((playlist) => (
            <li
                className="playlist-list-item pointer"
                key={playlist.id}
                onClick={
                    (() => addTrackToPlaylist(trackId, playlist.id),
                    handleMenuClose)
                }
            >
                {playlist.title}
            </li>
        ));

        var menuOptions = (
            <React.Fragment>
                <li className="track-menu-item">Add to Playlist</li>
                <ul className="playlist-list">{playlistList}</ul>
            </React.Fragment>
        );
    } else if (location === "playlist") {
        var menuOptions = (
            <React.Fragment>
                <li
                    className="track-menu-item pointer"
                    onClick={() => removeTrackFromPlaylist(trackId, playlistId)}
                >
                    Remove from Playlist
                </li>
            </React.Fragment>
        );
    }

    return (
        <ul className="track-menu" onMouseLeave={handleMenuClose}>
            {menuOptions}
        </ul>
    );
};

const mapSTP = ({ entities }) => ({
    playlists: Object.values(entities.playlists),
});

const mapDTP = (dispatch) => ({
    addTrackToPlaylist: (trackId, playlistId) =>
        dispatch(addTrackToPlaylist(trackId, playlistId)),
    removeTrackFromPlaylist: (trackId, playlistId) =>
        dispatch(removeTrackFromPlaylist(trackId, playlistId)),
});

export default connect(mapSTP, mapDTP)(TrackMenu);

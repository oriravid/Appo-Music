//ext
import React from "react";
import { connect } from "react-redux";
//int

const TrackMenu = ({ trackId, location, playlists }) => {
    if (location === "album") {
        var plOption = "Add to Playlist";
    } else if (location === "playlist") {
        var plOption = "Remove from Playlist";
    }

    const playlistList = playlists.map((playlist) => (
        <li className="playlist-list-item pointer" key={playlist.id}>
            {playlist.title}
        </li>
    ));

    return (
        <ul className="track-menu">
            <li className="track-menu-item">{plOption}</li>
            <ul className="playlist-list">{playlistList}</ul>
        </ul>
    );
};

const mapSTP = ({ entities }) => ({
    playlists: Object.values(entities.playlists),
});

export default connect(mapSTP)(TrackMenu);

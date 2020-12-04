import React, { Component } from "react";
import { Link } from "react-router-dom";

const PlaylistIndexItem = ({ playlist }) => {
    return (
        <Link to={`/playlists/${playlist.id}/`}>
            <li className="playlist-item">
                <span>？</span>
                <span>{playlist.title}</span>
            </li>
        </Link>
    );
};

export default PlaylistIndexItem;

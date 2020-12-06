import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const PlaylistIndexItem = ({ playlist }) => {
    return (
        <NavLink to={`/playlists/${playlist.id}/`}>
            <li className="nav-section-list-item">
                <img src={"/assets/icons/playlist.svg"} className="icon" />
                <span>{playlist.title}</span>
            </li>
        </NavLink>
    );
};

export default PlaylistIndexItem;

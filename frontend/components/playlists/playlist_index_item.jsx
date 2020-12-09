import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//int - util
import * as icons from "../../utils/icons";

const PlaylistIndexItem = ({ playlist }) => {
    return (
        <NavLink to={`/playlists/${playlist.id}/`}>
            <li className="nav-section-list-item">
                {icons.playlist("icon")}
                <span>{playlist.title}</span>
            </li>
        </NavLink>
    );
};

export default PlaylistIndexItem;

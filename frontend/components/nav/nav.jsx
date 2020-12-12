//ext
import React from "react";
import { NavLink, Link } from "react-router-dom";
//int - components
import PlaylistsIndexContainer from "../playlists/playlists_index_container";
//int - util
import * as icons from "../../utils/icons";

const Nav = ({ currentUser, signout, openModal }) => {
    const display = currentUser ? (
        <React.Fragment>
            <div className="nav-section-container">
                <div className="nav-section">
                    <h2>Library</h2>
                    <ul className="nav-section-list">
                        <NavLink to="/library">
                            <li className="nav-section-list-item">
                                {icons.recent("icon color")}
                                <span>Recently Added</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <PlaylistsIndexContainer />
            </div>
            <div className="current-user">
                <ul className="nav-section-list">
                    <li className="nav-section-list-item">
                        {icons.signout("icon pointer", signout)}
                        <span>Hello, {currentUser.username}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <div className="nav-section-container">
                <div className="nav-section">
                    <ul className="nav-section-list">
                        <li
                            className="nav-section-list-item pointer"
                            onClick={() => openModal("signin")}
                        >
                            {icons.signin("icon color")}
                            <span>Sign In</span>
                        </li>
                        <NavLink to="/browse">
                            <li className="nav-section-list-item">
                                {icons.browse("icon color")}
                                <span>Browse</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className="trial-container">
                <h2>All the music you love.</h2>
                <span>Sign up today and get 3 months on us.</span>
                <div className="btn wide" onClick={() => openModal("signup")}>
                    Try It Free
                </div>
            </div>
        </React.Fragment>
    );

    return (
        <div className="nav">
            <Link to="/">
                <div className="logo">
                    {icons.cloud()}
                    <h1>Music</h1>
                </div>
            </Link>
            <div className="input-container search">
                {icons.search("icon")}
                <input type="text" placeholder="Search"></input>
            </div>
            {display}
        </div>
    );
};

export default Nav;

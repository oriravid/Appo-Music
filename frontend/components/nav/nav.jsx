//ext
import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <React.Fragment>
            <Link className="btn wide" to="/library">
                Library
            </Link>
            <div className="playlists">
                <h2>Playlists</h2>
                <ul>
                    <li>Temp Playlist 1</li>
                    <li>Temp Playlist 2</li>
                    <li>Temp Playlist 3</li>
                    <li>Temp Playlist 4</li>
                    <li>Temp Playlist 5</li>
                    <li>Temp Playlist 6</li>
                </ul>
            </div>
            <div className="current-user">
                <p onClick={logout}>？</p>
                <p>{currentUser.username.toUpperCase()}</p>
            </div>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <Link className="btn wide" to="/signin">
                Sign In
            </Link>
            <div className="trial-container">Trial Container</div>
        </React.Fragment>
    );

    return (
        <div className="nav">
            <h1 className="logo">APPO MUSIC</h1>
            <div className="input-container">
                <p>？</p>
                <input type="text" placeholder="Search"></input>
            </div>
            {display}
        </div>
    );
};

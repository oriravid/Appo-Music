//ext
import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link className="btn" to="/signup">
                Sign Up
            </Link>
            <Link className="btn" to="/signin">
                Sign In
            </Link>
        </div>
    );

    return (
        <div className="nav">
            <h1 className="logo">APPO MUSIC</h1>
            <form>
                <input type="text" placeholder="search"></input>
            </form>
            <div>{display}</div>
            <div>
                <button>Library</button>
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
        </div>
    );
};

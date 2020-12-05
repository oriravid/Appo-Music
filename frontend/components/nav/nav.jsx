//ext
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//int - components
import PlaylistsContainer from "./playlists/playlists_index_container";
//int - actions
import { logout } from "../../actions/session_actions";

const Nav = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <React.Fragment>
            <Link className="btn wide" to="/library">
                Library
            </Link>
            <PlaylistsContainer />
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

const mapSTP = (state) => ({
    currentUser: state.session.currentUser,
});

const mapDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapSTP, mapDTP)(Nav);

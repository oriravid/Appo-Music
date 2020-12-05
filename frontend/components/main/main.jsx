//ext
import React from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
//int - components
import MusicPlayer from "./music_player";
import Playlist from "./playlist";
//int - utils
import { ProtectedRoute } from "../../utils/route_utils";

const mapSTP = (state) => ({
    currentUser: state.session.currentUser,
});

const Main = ({ currentUser }) => {
    return (
        <div className="main">
            <MusicPlayer />
            <div className="main-inner">
                <Switch>
                    <ProtectedRoute
                        exact
                        path="/playlists/:playlistId"
                        component={Playlist}
                    />
                </Switch>
            </div>
        </div>
    );
};

export default connect(mapSTP)(Main);

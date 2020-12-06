//ext
import React from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
//int - components
import MusicPlayer from "./music_player";
import Playlist from "./playlist";
import Library from "./library";
//int - utils
import { ProtectedRoute } from "../../utils/route_utils";

const Main = ({ currentUser }) => {
    return (
        <div className="main">
            <MusicPlayer />
            <div className="main-content">
                <Switch>
                    <ProtectedRoute
                        exact
                        path="/playlists/:playlistId"
                        component={Playlist}
                    />
                    <ProtectedRoute
                        exact
                        path="/library/"
                        component={Library}
                    />
                </Switch>
            </div>
        </div>
    );
};

const mapSTP = (state) => ({
    currentUser: state.session.currentUser,
});
export default connect(mapSTP)(Main);

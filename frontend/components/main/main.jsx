//ext
import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
//int - components
import MusicPlayer from "./music_player";
import Playlist from "./playlist";
import Library from "./library";
import Browse from "./browse";
//int - utils
import { ProtectedRoute } from "../../utils/route_utils";

const Main = () => {
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
                    <Route path="/" component={Browse} />
                </Switch>
            </div>
        </div>
    );
};

const mapSTP = ({ session }) => ({
    currentUser: session.currentUser,
});
export default connect(mapSTP)(Main);

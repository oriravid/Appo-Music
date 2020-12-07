//ext
import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
//int - components
import MusicPlayer from "./music_player";
import Playlist from "./playlist";
import Library from "./library";
import Browse from "./browse";
import NotFound from "./not_found";
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
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </div>
        </div>
    );
};

const mapSTP = (state) => ({
    currentUser: state.session.currentUser,
});
export default connect(mapSTP)(Main);

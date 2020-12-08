//ext
import React from "react";
import { Switch, Route } from "react-router-dom";
//int - components
import MusicPlayerContainer from "../music_player/music_player_container";
import PlaylistShowContainer from "../playlists/playlist_show_container";
import Library from "./library";
import Browse from "./browse";
//int - utils
import { ProtectedRoute } from "../../utils/route_utils";

const Main = () => {
    return (
        <div className="main">
            <MusicPlayerContainer />
            <div className="main-content">
                <Switch>
                    <ProtectedRoute
                        exact
                        path="/playlists/:playlistId"
                        component={PlaylistShowContainer}
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

export default Main;

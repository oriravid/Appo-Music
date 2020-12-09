//ext
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//int - components
import MusicPlayerContainer from "../music_player/music_player_container";
import AlbumShowContainer from "../albums/album_show_container";
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
                <div className="main-content-inner">
                    <Switch>
                        <Route
                            path="/albums/:albumId"
                            component={AlbumShowContainer}
                        />
                        <ProtectedRoute
                            path="/playlists/:playlistId"
                            component={PlaylistShowContainer}
                        />
                        <ProtectedRoute path="/library/" component={Library} />
                        <Route path="/browse" component={Browse} />
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/browse" />}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Main;

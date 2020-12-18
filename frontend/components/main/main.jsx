//ext
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//int - components
import MusicPlayerContainer from "../music_player/music_player_container";
import AlbumShowContainer from "../albums/album_show_container";
import PlaylistShowContainer from "../playlists/playlist_show_container";
import ArtistShowContainer from "../artists/artist_show_container";
import BrowseContainer from "./browse_container";
import LibraryContainer from "./library_container";
import NotFound from "./not_found";
import Footer from "./footer";
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
                        <Route
                            path="/artists/:artistId"
                            component={ArtistShowContainer}
                        />
                        <ProtectedRoute
                            path="/playlists/:playlistId"
                            component={PlaylistShowContainer}
                        />
                        <ProtectedRoute
                            path="/library/"
                            component={LibraryContainer}
                        />
                        <Route path="/browse" component={BrowseContainer} />
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/browse" />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;

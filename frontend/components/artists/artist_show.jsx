//ext
import React, { Component } from "react";
//int - util
import * as icons from "../../utils/icons";
import { dateSorter } from "../../utils/tracks_api_utils";

class ArtistShow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getArtistDetails(this.props.match.params.artistId);
    }

    render() {
        const { artist, albums, tracks } = this.props;
        if (!artist || !albums || !tracks) return null;

        const sortedAlbums = albums.sort(dateSorter);
        const latestAlbum = sortedAlbums[0];

        return (
            <React.Fragment>
                <div
                    className="artist-header"
                    style={{ backgroundImage: `url(${artist.url})` }}
                >
                    {icons.playCircleFill("icon color")}
                    <h1>{artist.name}</h1>
                </div>
                <div className="artist-new">
                    <h1>NEW MUSIC</h1>
                    <h2>{latestAlbum.title}</h2>
                </div>
                <p>WEEEE</p>
            </React.Fragment>
        );
    }
}

export default ArtistShow;

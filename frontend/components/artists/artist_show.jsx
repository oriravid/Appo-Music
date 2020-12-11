//ext
import React, { Component } from "react";
//int - util
import * as icons from "../../utils/icons";
import { dateSorter, popularSorter } from "../../utils/various";

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

        //sort by releaseDate
        const sortedAlbums = albums.sort(dateSorter);
        const latestAlbum = sortedAlbums[0];

        //sort by playCount
        const sortedTracks = tracks.sort(popularSorter);
        const topTracks = sortedTracks.slice(0, 6);
        console.log(topTracks);

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
                    <h2>Latest Release</h2>
                    <h3>{latestAlbum.title}</h3>
                </div>
                <div className="top-songs">
                    <h2>Top Songs</h2>
                    <ul>
                        {topTracks.map((track) => (
                            <li key={track.id}>{track.title}</li>
                        ))}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default ArtistShow;

//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
//int - containers
import AlbumsSlider from "../albums/albums_slider";
import AlbumsSliderItem from "../albums/albums_slider_item";
//int - util
import * as icons from "../../utils/icons";
import { dateSorter, dateFormatter, popularSorter } from "../../utils/various";

class ArtistShow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getArtistDetails(this.props.match.params.artistId);
    }

    render() {
        const { artist, albums, tracks, addTracks, openModal } = this.props;
        if (!artist || !albums || !tracks) return null;

        //sort by releaseDate
        const sortedAlbums = albums.sort(dateSorter);
        const latestAlbum = sortedAlbums[0];
        const latestAlbumTracks = tracks.filter(
            (track) => track.albumId == latestAlbum.id
        );

        //sort by playCount
        const sortedTracks = tracks.sort(popularSorter);
        var topTracks = [...sortedTracks.slice(0, 6)].map((track) => (
            <Link to={`/albums/${track.albumId}`} key={track.id}>
                <li className="top-songs-list-item">
                    <span className="track-title">{track.title}</span>
                </li>
            </Link>
        ));

        return (
            <React.Fragment>
                <div
                    className="artist-header"
                    style={{ backgroundImage: `url(${artist.url})` }}
                >
                    {icons.playCircleFill("icon color")}
                    <h1>{artist.name}</h1>
                </div>
                <div className="artist-highlights">
                    <div className="latest-release">
                        <h2>Latest Release</h2>
                        <div className="latest-release-album">
                            <Link to={`/albums/${latestAlbum.id}`}>
                                <img src={latestAlbum.url} />
                            </Link>
                            {icons.playCircleFill("icon color pointer", () =>
                                addTracks(latestAlbumTracks)
                            )}
                        </div>
                        <div className="latest-release-info">
                            <span className="date">
                                {dateFormatter(latestAlbum.releaseDate)}
                            </span>
                            <Link to={`/albums/${latestAlbum.id}`}>
                                <span className="album">
                                    {latestAlbum.title}
                                </span>
                            </Link>
                            <span className="tracks">
                                {latestAlbumTracks.length + " Songs"}
                            </span>
                        </div>
                    </div>
                    <div className="top-songs">
                        <h2>Top Songs</h2>
                        <ul className="top-songs-list">{topTracks}</ul>
                    </div>
                </div>
                <AlbumsSlider
                    title={"Albums"}
                    albums={sortedAlbums}
                    tracks={tracks}
                />
                <div className="text-container artist">
                    <span className="text-cutoff artist">
                        <p>
                            <strong>About {artist.name}</strong>
                            {artist.bio}
                        </p>
                        <button
                            className="more pointer"
                            onClick={() =>
                                openModal({
                                    title: artist.name,
                                    text: artist.bio,
                                })
                            }
                        >
                            MORE
                        </button>
                    </span>
                </div>
            </React.Fragment>
        );
    }
}

export default ArtistShow;

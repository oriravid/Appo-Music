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
        const topTracks = [...sortedTracks.slice(0, 6)];
        const topTracksList = [...sortedTracks.slice(0, 6)].map(
            (track, index) => (
                <li className="top-songs-list-item" key={track.id}>
                    <span className="track-number">{index + 1}</span>
                    <Link
                        to={{
                            pathname: `/albums/${track.albumId}`,
                            trackId: track.id,
                        }}
                    >
                        <span className="track-title">{track.title}</span>
                        <span className="album-title">Album Title</span>
                        {/* <span className="album-title">{albums[track.albumId]}</span> */}
                    </Link>
                </li>
            )
        );

        return (
            <React.Fragment>
                <div
                    className="artist-header"
                    style={{ backgroundImage: `url(${artist.url})` }}
                >
                    {icons.playCircleFill("icon color pointer", () =>
                        addTracks(topTracks)
                    )}
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
                        <ol className="top-songs-list">{topTracksList}</ol>
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

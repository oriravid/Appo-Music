//ext
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//int - containers
import Loading from "../main/loading";
import AlbumsSlider from "../albums/albums_slider";
import AlbumItem from "../albums/album_item";
//int - util
import * as icons from "../../utils/icons";
import { dateSorter, popularSorter } from "../../utils/various";

class ArtistShow extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    handleTopTrackClick(track) {
        this.props.history.push({
            pathname: `/albums/${track.albumId}`,
            trackId: track.id,
        });
    }

    componentDidMount() {
        this.props
            .getArtistDetails(this.props.match.params.artistId)
            .then((res) => {
                this.setState({ loading: false });
                document.title = `${this.props.artist.name} on Appo Music`;
            });
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.match.params.artistId !== this.props.match.params.artistId
        ) {
            this.setState({ loading: true });
            this.props
                .getArtistDetails(this.props.match.params.artistId)
                .then((res) => {
                    this.setState({ loading: false });
                    document.title = `${this.props.artist.name} on Appo Music`;
                });
        }
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }

        const { artist, albums, tracks, addTracks, openModal } = this.props;

        //sort by releaseDate
        const sortedAlbums = Object.values(albums)
            .filter((album) => album.artistId == artist.id)
            .sort(dateSorter);
        const latestAlbum = sortedAlbums[0];

        const topTracksList = tracks.sort(popularSorter).map((track, index) => (
            <li
                className="top-songs-list-item pointer"
                key={track.id}
                onClick={() => this.handleTopTrackClick(track)}
            >
                <span className="track-number">{index + 1}</span>
                <div className="track-info">
                    <span className="track-title">{track.title}</span>
                    <span className="album-title">
                        {albums[track.albumId].title}
                    </span>
                </div>
            </li>
        ));

        return (
            <React.Fragment>
                <div
                    className="artist-header"
                    style={{ backgroundImage: `url(${artist.url})` }}
                >
                    {icons.playCircleFill("icon color pointer", () =>
                        addTracks(tracks)
                    )}
                    <h1>{artist.name}</h1>
                </div>
                <div className="artist-highlights">
                    <div className="latest-release">
                        <h2>Latest Release</h2>
                        <AlbumItem
                            album={latestAlbum}
                            artist={artist}
                            info={"hor"}
                        />
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

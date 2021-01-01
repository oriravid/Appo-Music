//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
//int - components
import Loading from "../main/loading";
import TrackListItem from "../tracks/track_list_item";
import TrackMenu from "../tracks/track_menu";
//int - utils
import * as icons from "../../utils/icons";
import { dateFormatter, timeAdder } from "../../utils/various";

class AlbumShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            topSongSelected: false,
            selectedTrackId: null,
            hoveredTrackId: null,
            menuTrackId: null,
        };
    }

    handlePlay() {
        const { hoveredTrackId } = this.state;
        const { tracks, addTracks } = this.props;

        if (hoveredTrackId) {
            addTracks(tracks.filter((track) => track.id >= hoveredTrackId));
        } else {
            addTracks(tracks);
        }
    }

    handleMenuOpen() {
        const { hoveredTrackId } = this.state;
        this.setState({ menuTrackId: hoveredTrackId });
    }

    handleMenuClose() {
        this.setState({ menuTrackId: null });
    }

    componentDidMount() {
        this.props
            .getAlbumDetails(this.props.match.params.albumId)
            .then((res) => this.setState({ loading: false }));

        if (this.props.selectedTrackId) {
            this.setState({
                topSongSelected: true,
                selectedTrackId: this.props.selectedTrackId,
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.currentUser != prevProps.currentUser ||
            prevProps.match.params.albumId !== this.props.match.params.albumId
        ) {
            this.setState({ loading: true });
            this.props
                .getAlbumDetails(this.props.match.params.albumId)
                .then((res) => this.setState({ loading: false }));
        }

        if (this.state.topSongSelected && !this.state.loading) {
            document.querySelector(".track-row.selected").scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
            this.setState({ topSongSelected: false });
        }
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }

        const { album, tracks, artist } = this.props;

        const trackItems = tracks.map((track) => {
            let trackClasses, trackMenu;
            this.state.selectedTrackId == track.id
                ? (trackClasses = "track-row selected")
                : (trackClasses = "track-row");

            this.state.menuTrackId == track.id
                ? (trackMenu = (
                      <TrackMenu
                          trackId={track.id}
                          location={"album"}
                          handleMenuClose={this.handleMenuClose.bind(this)}
                      />
                  ))
                : (trackMenu = "");

            return (
                <div
                    className={trackClasses}
                    key={track.id}
                    onClick={() => this.setState({ selectedTrackId: track.id })}
                    onMouseEnter={() =>
                        this.setState({ hoveredTrackId: track.id })
                    }
                    onMouseLeave={() => this.setState({ hoveredTrackId: null })}
                    onDoubleClick={this.handlePlay.bind(this)}
                >
                    {trackMenu}
                    <TrackListItem
                        location={"album"}
                        track={track}
                        hovered={this.state.hoveredTrackId == track.id}
                        selected={this.state.selectedTrackId == track.id}
                        handlePlay={this.handlePlay.bind(this)}
                        handleMenuOpen={this.handleMenuOpen.bind(this)}
                    />
                </div>
            );
        });

        return (
            <div className="album-container">
                <div className="album-cover-container">
                    <img className="album-cover" src={album.url} />
                </div>
                <div className="album-header-tracks">
                    <div className="album-header">
                        <h1>{album.title}</h1>
                        <h2>
                            <Link to={`/artists/${artist.id}`}>
                                {artist.name}
                            </Link>
                        </h2>
                        <h3>
                            {album.genre} • {album.releaseDate.slice(0, 4)}
                        </h3>
                        <div
                            className="btn"
                            onClick={this.handlePlay.bind(this)}
                        >
                            {icons.play("icon white")}
                            Play
                        </div>
                        <div className="text-container">
                            <span className="text-cutoff">
                                <p>
                                    <strong>About</strong>
                                    {album.description}
                                </p>
                                <button
                                    className="more pointer"
                                    onClick={() =>
                                        this.props.openModal({
                                            title: album.title,
                                            sub: artist.name,
                                            text: album.description,
                                        })
                                    }
                                >
                                    MORE
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="tracks-list">{trackItems}</div>
                    <div className="album-meta">
                        <p>
                            {tracks.length} SONGS,{" "}
                            {timeAdder(
                                Object.values(tracks).map(
                                    (track) => track.duration
                                )
                            ).toUpperCase()}
                        </p>
                        <p>
                            RELEASED{" "}
                            {dateFormatter(album.releaseDate).toUpperCase()}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumShow;

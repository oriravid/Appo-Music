//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
//int - components
import Loading from "../main/loading";
import TrackListItem from "../tracks/track_list_item";
import TrackMenu from "../tracks/track_menu";
//int - utils
import * as icons from "../../utils/icons";
import { dateFormatter, timeAdder, indexSorter } from "../../utils/various";

class PlaylistShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
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

    handleDelete() {
        this.props.deletePlaylist(this.props.playlist.id);
        this.props.history.push("/");
    }

    componentDidMount() {
        this.props
            .getPlaylistDetails(this.props.match.params.playlistId)
            .then((res) => this.setState({ loading: false }));
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.match.params.playlistId !==
            prevProps.match.params.playlistId
        ) {
            this.setState({ loading: true });
            this.props
                .getPlaylistDetails(this.props.match.params.playlistId)
                .then((res) => this.setState({ loading: false }));
        }
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }

        const { playlist, albums, tracks, artists } = this.props;

        const trackItems = tracks.sort(indexSorter).map((track) => {
            let trackClasses, trackMenu;
            this.state.selectedTrackId == track.id
                ? (trackClasses = "track-row selected")
                : (trackClasses = "track-row");

            this.state.menuTrackId == track.id
                ? (trackMenu = (
                      <TrackMenu
                          trackId={track.id}
                          playlistId={playlist.id}
                          location={"playlist"}
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
                    {/* <img className="album-cover" src={"www.google.com"} /> */}
                </div>
                <div className="album-header-tracks">
                    <div className="album-header">
                        <h1>{playlist.title}</h1>
                        <div
                            className="btn"
                            onClick={this.handlePlay.bind(this)}
                        >
                            {icons.play("icon white")}
                            Play
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
                            CREATED{" "}
                            {dateFormatter(playlist.createdAt).toUpperCase()}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaylistShow;

// <div>
//     <h1>{playlist.title}</h1>
//     <p onClick={this.handleDelete.bind(this)}>DELETE ME</p>
// </div>

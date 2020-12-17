//ext
import React, { Component } from "react";
//int - components
import Loading from "../main/loading";
import Empty from "../main/empty";
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
            editing: false,
            title: "",
            coverUrl: null,
            selectedTrackId: null,
            hoveredTrackId: null,
            menuTrackId: null,
        };
    }

    handleInput() {
        return (e) =>
            this.setState({
                title: e.currentTarget.value,
            });
    }

    handleEnter(e) {
        if (e.key === "Enter") {
            this.props.updatePlaylist({
                id: this.props.playlist.id,
                title: this.state.title,
            }),
                this.setState({ editing: false });
        }
    }

    setCoverUrl(albums) {
        clearInterval(this.coverSetter);
        if (!albums) return;

        var albums = Object.values(albums);
        this.setState({ coverUrl: albums[0].url });

        if (albums.length > 1) {
            let albumIdx = 1;

            this.coverSetter = setInterval(() => {
                this.setState({
                    coverUrl: albums[albumIdx].url,
                });
                albumIdx < albums.length - 1 ? albumIdx++ : (albumIdx = 0);
            }, 3000);
        }
    }

    handlePlay(trackNumber) {
        const { tracks, addTracks } = this.props;

        if (trackNumber) {
            addTracks(
                tracks
                    .filter((track) => track.trackNumber >= trackNumber)
                    .sort(indexSorter)
            );
        } else {
            addTracks(tracks.sort(indexSorter));
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
            .then((res) => {
                this.setState({ loading: false }),
                    this.setCoverUrl(res.payload.albums);
            });
    }

    componentDidUpdate(prevProps) {
        const { playlistId } = this.props.match.params;

        if (
            playlistId !== prevProps.match.params.playlistId ||
            this.props.tracks.length != prevProps.tracks.length
        ) {
            this.setState({ loading: true, editing: false });
            this.props.getPlaylistDetails(playlistId).then((res) => {
                this.setState({ loading: false }),
                    this.setCoverUrl(res.payload.albums);
            });
        }

        if (this.state.editing) {
            this.titleInput.focus();
        }
    }

    componentWillUnmount() {
        clearInterval(this.coverSetter);
    }

    render() {
        const { playlist, albums, tracks, artists } = this.props;

        if (this.state.loading) return <Loading />;
        if (!tracks.length)
            return (
                <Empty
                    location={"playlist"}
                    playlist={playlist}
                    handleDelete={this.handleDelete.bind(this)}
                />
            );

        if (this.state.editing) {
            var playlistTitle = (
                <input
                    id="edit-playlist-field"
                    ref={(input) => {
                        this.titleInput = input;
                    }}
                    type="text"
                    value={this.state.title}
                    onChange={this.handleInput()}
                    onKeyPress={this.handleEnter.bind(this)}
                    autoComplete="off"
                ></input>
            );
        } else {
            var playlistTitle = <h1>{playlist.title}</h1>;
        }
        const trackItems = tracks.sort(indexSorter).map((track) => {
            const album = albums[track.albumId];
            const artist = artists[album.artistId];

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
                    onDoubleClick={() => this.handlePlay(track.trackNumber)}
                >
                    {trackMenu}
                    <TrackListItem
                        location={"playlist"}
                        track={track}
                        album={album}
                        artist={artist}
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
                    <img className="album-cover" src={this.state.coverUrl} />
                </div>
                <div className="album-header-tracks">
                    <div className="album-header playlist">
                        <div className="playlist-header">
                            {playlistTitle}
                            <div className="playlist-actions">
                                {icons.edit("icon color pointer", () =>
                                    this.setState({
                                        title: playlist.title,
                                        editing: !this.state.editing,
                                    })
                                )}
                                {icons.trash(
                                    "icon color pointer",
                                    this.handleDelete.bind(this)
                                )}
                            </div>
                        </div>
                        <div className="btn" onClick={() => this.handlePlay()}>
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

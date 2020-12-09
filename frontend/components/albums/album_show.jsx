//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
//int - components
import TrackListItem from "../tracks/track_list_item";
//int - utils
import * as icons from "../../utils/icons";
import { dateFormatter, timeAdder } from "../../utils/various";
import { openModal } from "../../actions/modal_actions";

class AlbumShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSong: null,
        };
    }

    componentDidMount() {
        this.props.getAlbumDetails(this.props.match.params.albumId);
    }

    render() {
        const { album, tracks, artist } = this.props;
        if (!album || !album.description) return null;

        const trackItems = tracks.map((track, index) => {
            let trackClasses = "track-row";
            if (this.state.selectedSong === index) {
                trackClasses += " selected";
            }

            return (
                <div
                    className={trackClasses}
                    key={track.id}
                    onClick={() => this.setState({ selectedSong: index })}
                >
                    <TrackListItem track={track} index={index + 1} />
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
                            {album.genre} • {album.release_date.slice(0, 4)}
                        </h3>
                        <div className="btn">
                            {icons.playwht}
                            Play
                        </div>
                        <div className="text-container">
                            <span className="text-cutoff">
                                <p>
                                    <strong>About</strong>
                                    {album.description}
                                </p>
                                <button
                                    className="more"
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
                            {dateFormatter(album.release_date).toUpperCase()}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumShow;

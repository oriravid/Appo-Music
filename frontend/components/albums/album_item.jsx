//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//int - actions
import { addTracks } from "../../actions/music_actions";
//int - utils
import { getAlbumTracks } from "../../utils/tracks_api_utils";
import { dateFormatter } from "../../utils/various";

import * as icons from "../../utils/icons";

class AlbumsSliderItem extends Component {
    constructor(props) {
        super(props);
    }

    handlePlay() {
        getAlbumTracks(this.props.album.id).then((tracks) =>
            this.props.addTracks(Object.values(tracks))
        );
    }

    render() {
        const { album, artist, info } = this.props;

        if (info === "ver") {
            var classes = "ver";

            if (artist) {
                var bottomLink = `/artists/${artist.id}`;
                var bottomText = artist.name;
            } else {
                var bottomLink = `/albums/${album.id}`;
                var bottomText = album.releaseDate.split("-")[0];
            }

            var albumInfo = (
                <div className="album-info">
                    <Link to={`/albums/${album.id}`}>
                        <span className="album-title">{album.title}</span>
                    </Link>
                    <Link to={bottomLink}>
                        <span className="artist-or-date">{bottomText}</span>
                    </Link>
                </div>
            );
        } else if (info === "hor") {
            var classes = "hor";

            var albumInfo = (
                <div className="album-info">
                    <span className="album-date">
                        {dateFormatter(album.releaseDate, true).toUpperCase()}
                    </span>
                    <Link to={`/albums/${album.id}`}>
                        <span className="album-title">{album.title}</span>
                    </Link>
                    <span className="album-tracks">12 Songs</span>
                </div>
            );
        }

        return (
            <div className={`album-item ${classes}`}>
                <div className="album-cover">
                    <Link to={`/albums/${album.id}`}>
                        <img src={album.url} />
                    </Link>
                    {icons.playCircleFill(
                        "icon color pointer",
                        this.handlePlay.bind(this)
                    )}
                </div>
                {albumInfo}
            </div>
        );
    }
}

const mapDTP = (dispatch) => ({
    addTracks: (tracks) => dispatch(addTracks(tracks)),
});

export default connect(null, mapDTP)(AlbumsSliderItem);

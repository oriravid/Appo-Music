//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//int - actions
import { addTracks } from "../../actions/music_actions";
//int - utils
import * as icons from "../../utils/icons";

const AlbumsSliderItem = ({ album, artist, tracks, addTracks }) => {
    if (artist) {
        var bottomLink = `/artists/${artist.id}`;
        var bottomText = artist.name;
    } else {
        var bottomLink = `/albums/${album.id}`;
        var bottomText = album.releaseDate.split("-")[0];
    }

    return (
        <li className="albums-slider-list-item">
            <Link to={`/albums/${album.id}`}>
                <img src={album.url} />
            </Link>
            {icons.playCircleFill("icon color pointer", () =>
                addTracks(tracks)
            )}

            <Link to={`/albums/${album.id}`}>
                <span className="album">{album.title}</span>
            </Link>
            <Link to={bottomLink}>
                <span className="artist">{bottomText}</span>
            </Link>
        </li>
    );
};

const mapDTP = (dispatch) => ({
    addTracks: (tracks) => dispatch(addTracks(tracks)),
});

export default connect(null, mapDTP)(AlbumsSliderItem);

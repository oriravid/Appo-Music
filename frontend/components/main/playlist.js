//ext
import React, { Component } from "react";
import { connect } from "react-redux";

const mapSTP = (state) => ({
    playlists: state.entities.playlists,
});

class Playlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { playlists, match } = this.props;
        if (Object.keys(playlists).length === 0) return null;
        const playlist = playlists[match.params.playlistId];

        return <h1>{playlist.title}</h1>;
    }
}

export default connect(mapSTP)(Playlist);

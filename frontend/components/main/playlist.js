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
        return <h1>Playlist #{this.props.match.params.playlistId}</h1>;
    }
}

export default connect(mapSTP)(Playlist);

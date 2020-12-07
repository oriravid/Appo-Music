//ext
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
//int
import { deletePlaylist } from "../../actions/playlist_actions";

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.playlist;

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.setState(this.props.playlist);
    }

    handleDelete() {
        this.props.deletePlaylist(this.props.playlist.id);
        this.props.history.push("/");
    }

    render() {
        if (!this.state) return null;
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p onClick={this.handleDelete}>DELETE ME</p>
            </div>
        );
    }
}

const mapSTP = (state, ownProps) => ({
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
});

const mapDTP = (dispatch) => ({
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
});

export default connect(mapSTP, mapDTP)(Playlist);

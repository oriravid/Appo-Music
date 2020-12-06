//ext
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
//int
import { deletePlaylist } from "../../actions/playlist_actions";

class Playlist extends Component {
    constructor(props) {
        super(props);

        // this.handleDelete.bind(this);
    }

    // handleDelete(playlistId) {
    //     this.props.history.push("/");
    //     this.props.deletePlaylist(playlistId);
    // }

    render() {
        const { playlists, match } = this.props;
        const playlist = playlists[match.params.playlistId];
        if (Object.keys(playlists).length === 0) return null;
        return (
            <div>
                <h1>{playlist.title}</h1>
                {/* <p onClick={this.handleDelete(playlist.id)}>DELETE ME</p> */}
            </div>
        );
    }
}

const mapSTP = (state) => ({
    playlists: state.entities.playlists,
});

const mapDTP = (dispatch) => {
    return {
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    };
};

export default connect(mapSTP, mapDTP)(Playlist);

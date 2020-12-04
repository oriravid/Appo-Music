//ext
import React, { Component } from "react";

class PlaylistsIndex extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserPlaylists(this.props.currentUser.id);
    }

    componentWillUnmount() {
        this.props.clearUserPlaylists();
    }

    render() {
        let playlistItems;
        if (Object.keys(this.props.playlists).length !== 0) {
            playlistItems = Object.values(this.props.playlists)
                .sort((a, b) => (a.title > b.title ? 1 : -1))
                .map((playlist) => (
                    <li key={playlist.id} className="playlist">
                        {playlist.title}
                    </li>
                ));
        }

        return (
            <div className="playlists">
                <h2>Playlists</h2>
                <ul>{playlistItems}</ul>
            </div>
        );
    }
}

export default PlaylistsIndex;

//ext
import React, { Component } from "react";
//int
import PlaylistIndexItem from "./playlist_index_item";

class PlaylistsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            title: "",
        };

        this.handleEnter = this.handleEnter.bind(this);
    }

    handleInput(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    handleEnter(e) {
        if (e.key === "Enter") {
            this.props.createNewPlaylist(this.state);
            this.setState({
                title: "",
            });
        }
    }

    componentDidMount() {
        this.props.getUserPlaylists(this.props.currentUser.id);
    }

    // componentWillUnmount() {
    //     this.props.clearUserPlaylists();
    // }

    render() {
        const { playlists } = this.props;
        if (!playlists) return null;
        const playlistItems = Object.values(playlists)
            .sort((a, b) => (a.title > b.title ? 1 : -1))
            .map((playlist) => (
                <PlaylistIndexItem key={playlist.id} playlist={playlist} />
            ));

        return (
            <div className="nav-section">
                <h2>Playlists</h2>
                <ul className="nav-section-list">
                    {playlistItems}
                    <li className="nav-section-list-item">
                        <img src={"/assets/icons/add.svg"} className="icon" />
                        <input
                            id="new-playlist-field"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInput("title")}
                            onKeyPress={this.handleEnter}
                            placeholder="Create New"
                            autoComplete="off"
                        ></input>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PlaylistsIndex;

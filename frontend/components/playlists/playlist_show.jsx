//ext
import React, { Component } from "react";

class PlaylistShow extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        //fetch playlist details here
    }

    handleDelete() {
        this.props.deletePlaylist(this.props.playlist.id);
        this.props.history.push("/");
    }

    render() {
        const { playlist } = this.props;
        if (!playlist) return null;

        return (
            <div>
                <h1>{playlist.title}</h1>
                <p onClick={this.handleDelete}>DELETE ME</p>
            </div>
        );
    }
}

export default PlaylistShow;

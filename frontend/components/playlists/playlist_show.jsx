//ext
import React, { Component } from "react";

class PlaylistShow extends Component {
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

export default PlaylistShow;

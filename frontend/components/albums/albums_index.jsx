//ext
import React, { Component } from "react";
//int - components
import AlbumsIndexItem from "./albums_index_item";

class AlbumsIndex extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllAlbums();
    }

    render() {
        if (!this.props.albums.length) return null;

        return (
            <div className="albums-container">
                <h1>Albums go here!</h1>
                <ul>
                    {this.props.albums.map((album) => (
                        <AlbumsIndexItem key={album.id} album={album} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default AlbumsIndex;

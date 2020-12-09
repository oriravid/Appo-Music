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
        const { albums, artists } = this.props;
        if (!albums.length) return null;

        return (
            <div className="albums-container">
                <h1>Albums</h1>
                <ul>
                    {albums.map((album) => (
                        <AlbumsIndexItem
                            key={album.id}
                            album={album}
                            artist={artists[album.artistId]}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default AlbumsIndex;

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
            <React.Fragment>
                <ul>
                    {albums.map((album) => (
                        <AlbumsIndexItem
                            key={album.id}
                            album={album}
                            artist={artists[album.artistId]}
                        />
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default AlbumsIndex;

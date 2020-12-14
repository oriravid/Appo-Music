//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
//int - containers
import AlbumItem from "../albums/album_item";
//int - utils
import { savedSorter } from "../../utils/various";

class Library extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserAlbums();
    }

    render() {
        const { albums, artists } = this.props;
        if (!albums.length || !albums[0].savedAt)
            return (
                <React.Fragment>
                    <div className="header-section">
                        <h1>Library</h1>
                        <p style={{ margin: "20px 0" }}>
                            Looks like you haven't saved any music yet :(
                        </p>
                    </div>
                </React.Fragment>
            );

        //sort by savedAt
        const userAlbums = [...albums].sort(savedSorter);

        const albumsList = userAlbums.map((album) => (
            <li key={album.id} className="albums-shelf-list-item">
                <AlbumItem
                    album={album}
                    artist={artists ? artists[album.artistId] : undefined}
                    info={"ver"}
                    type={"lib"}
                />
            </li>
        ));

        return (
            <React.Fragment>
                <div className="header-section">
                    <h1>Library</h1>
                </div>
                <div className="albums-shelf">
                    <ul className="albums-shelf-list">{albumsList}</ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Library;

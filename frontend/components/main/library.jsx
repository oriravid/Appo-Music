//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
//int - containers
import AlbumItem from "../albums/album_item";
//int - utils
import { dateSorter, popularSorter } from "../../utils/various";

class Library extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserAlbums();
    }

    render() {
        const { albums, artists } = this.props;
        if (!albums.length) return null;

        //sort by releaseDate
        const newAlbums = [...albums].sort(dateSorter);

        const albumsList = newAlbums.map((album) => (
            <li key={album.id} className="albums-shelf-list-item">
                <AlbumItem
                    album={album}
                    artist={artists ? artists[album.artistId] : undefined}
                    info={"ver"}
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

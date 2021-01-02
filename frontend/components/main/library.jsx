//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
//int - containers
import Loading from "./loading";
import Empty from "./empty";
import AlbumItem from "../albums/album_item";
//int - utils
import * as icons from "../../utils/icons";
import { savedSorter } from "../../utils/various";

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    componentDidMount() {
        document.title = `Appo Music | Library`;

        this.props
            .getUserAlbums()
            .then((res) => this.setState({ loading: false }));
    }

    render() {
        const { albums, artists } = this.props;

        if (this.state.loading) return <Loading />;
        if (!albums.length) return <Empty location={"library"} />;

        //sort by savedAt
        const userAlbums = [...albums].sort(savedSorter);

        const albumsList = userAlbums.map((album) => (
            <li key={album.id} className="albums-shelf-list-item">
                <AlbumItem
                    album={album}
                    artist={artists ? artists[album.artistId] : undefined}
                    info={"ver"}
                    user={true}
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

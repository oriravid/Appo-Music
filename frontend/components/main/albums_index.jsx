//ext
import React, { Component } from "react";
import { connect } from "react-redux";
//int - components
import AlbumsIndexItem from "./albums_index_item";
//int - actions
import { getAllAlbums, getUserAlbums } from "../../actions/album_actions";

class Albums extends Component {
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

const mapSTP = ({ entities }) => ({
    albums: Object.keys(entities.albums),
});

const mapDTP = (dispatch) => ({
    getAllAlbums: () => dispatch(getAllAlbums()),
    getUserAlbums: (userId) => dispatch(getUserAlbums()),
});

export default connect(mapSTP, mapDTP)(Albums);

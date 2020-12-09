//ext
import { connect } from "react-redux";
//int - containers
import AlbumShow from "./album_show";
// //int - actions
import { getAlbumDetails } from "../../actions/album_actions";
import { addTracks } from "../../actions/music_actions";
import { openModal } from "../../actions/modal_actions";

const mapSTP = (store, ownProps) => {
    if (Object.keys(store.entities.albums).length) {
        var album = store.entities.albums[ownProps.match.params.albumId];
        var artist = store.entities.artists[album.artistId];
    } else {
        var album;
        var artist;
    }

    return {
        album: album,
        artist: artist,
        tracks: Object.values(store.entities.tracks),
    };
};

const mapDTP = (dispatch) => {
    return {
        getAlbumDetails: (albumId) => dispatch(getAlbumDetails(albumId)),
        addTracks: (tracks) => dispatch(addTracks(tracks)),
        openModal: (data) => dispatch(openModal("text", data)),
    };
};

export default connect(mapSTP, mapDTP)(AlbumShow);

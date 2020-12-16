//ext
import { connect } from "react-redux";
//int - containers
import AlbumShow from "./album_show";
// //int - actions
import { getAlbumDetails } from "../../actions/album_actions";
import { addTracks } from "../../actions/music_actions";
import { openModal } from "../../actions/modal_actions";

const mapSTP = (store, ownProps) => {
    const albumId = ownProps.match.params.albumId;
    let album, artist;

    if (store.entities.albums[albumId]) {
        album = store.entities.albums[albumId];
        artist = store.entities.artists[album.artistId];
    }

    return {
        album: album,
        artist: artist,
        tracks: Object.values(store.entities.tracks),
        selectedTrackId: ownProps.location.trackId,
        currentUser: store.session.currentUser,
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

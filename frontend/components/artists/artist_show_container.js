//ext
import { connect } from "react-redux";
//int - containers
import ArtistShow from "./artist_show";
//int - actions
import { addTracks } from "../../actions/music_actions";
import { getArtistDetails } from "../../actions/artist_actions";
import { openModal } from "../../actions/modal_actions";

const mapSTP = (store, ownProps) => {
    const artistId = ownProps.match.params.artistId;

    let artist, albums, tracks;

    if (store.entities.artists[artistId]) {
        artist = store.entities.artists[artistId];

        albums = Object.values(store.entities.albums).filter(
            (album) => album.artistId == artistId
        );

        tracks = Object.values(store.entities.tracks);
    }

    return {
        artist: artist,
        albums: albums,
        tracks: tracks,
    };
};

const mapDTP = (dispatch) => {
    return {
        getArtistDetails: (artistId) => dispatch(getArtistDetails(artistId)),
        addTracks: (tracks) => dispatch(addTracks(tracks)),
        openModal: (data) => dispatch(openModal("text", data)),
    };
};

export default connect(mapSTP, mapDTP)(ArtistShow);

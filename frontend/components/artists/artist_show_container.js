//ext
import { connect } from "react-redux";
//int - containers
import ArtistShow from "./artist_show";
//int - actions
import { addTracks } from "../../actions/music_actions";
import { getArtistDetails } from "../../actions/artist_actions";
import { openModal } from "../../actions/modal_actions";

const mapSTP = (store, ownProps) => {
    return {
        artist: store.entities.artists[ownProps.match.params.artistId],
        albums: store.entities.albums,
        tracks: Object.values(store.entities.tracks),
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

//ext
import { connect } from "react-redux";
//int - containers
import Browse from "./browse";
//int - actions
import { getAllAlbums } from "../../actions/album_actions";
import { openModal } from "../../actions/modal_actions";

const mapSTP = ({ entities }) => ({
    albums: Object.values(entities.albums),
    artists: entities.artists,
    tracks: Object.values(entities.tracks),
});

const mapDTP = (dispatch) => ({
    getAllAlbums: () => dispatch(getAllAlbums()),
    openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapSTP, mapDTP)(Browse);

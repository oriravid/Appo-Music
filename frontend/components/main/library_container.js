//ext
import { connect } from "react-redux";
//int - containers
import Library from "./library";
//int - actions
import { getUserAlbums } from "../../actions/album_actions";

const mapSTP = ({ entities }) => ({
    albums: Object.values(entities.albums),
    artists: entities.artists,
    tracks: Object.values(entities.tracks),
});

const mapDTP = (dispatch) => ({
    getUserAlbums: () => dispatch(getUserAlbums()),
});

export default connect(mapSTP, mapDTP)(Library);

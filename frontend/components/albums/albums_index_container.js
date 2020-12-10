//ext
import { connect } from "react-redux";
//int - containers
import AlbumsIndex from "./albums_index";
//int - actions
import { getAllAlbums, getUserAlbums } from "../../actions/album_actions";

const mapSTP = ({ entities }) => ({
    albums: Object.values(entities.albums),
    artists: entities.artists,
});

const mapDTP = (dispatch) => ({
    getAllAlbums: () => dispatch(getAllAlbums()),
    getUserAlbums: (userId) => dispatch(getUserAlbums(userId)),
});

export default connect(mapSTP, mapDTP)(AlbumsIndex);

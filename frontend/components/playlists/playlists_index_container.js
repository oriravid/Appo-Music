//ext
import { connect } from "react-redux";
//int
import PlaylistsIndex from "./playlists_index";
import {
    getUserPlaylists,
    createNewPlaylist,
} from "../../actions/playlist_actions";

const mapSTP = (state) => ({
    playlists: state.entities.playlists,
    currentUser: state.session.currentUser,
});

const mapDTP = (dispatch) => ({
    getUserPlaylists: () => dispatch(getUserPlaylists()),
    createNewPlaylist: (playlist) => dispatch(createNewPlaylist(playlist)),
});

export default connect(mapSTP, mapDTP)(PlaylistsIndex);

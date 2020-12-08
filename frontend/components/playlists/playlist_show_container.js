//ext
import { connect } from "react-redux";
//int - components
import PlaylistShow from "./playlist_show";
//int - actions
import { deletePlaylist } from "../../actions/playlist_actions";

const mapSTP = (state, ownProps) => ({
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
});

const mapDTP = (dispatch) => ({
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
});

export default connect(mapSTP, mapDTP)(PlaylistShow);

//ext
import { connect } from "react-redux";
//int - components
import PlaylistShow from "./playlist_show";
//int - actions
import { getPlaylistDetails } from "../../actions/playlist_actions";
import { updatePlaylist, deletePlaylist } from "../../actions/playlist_actions";
import { addTracks } from "../../actions/music_actions";

const mapSTP = (store, ownProps) => {
    return {
        playlist: store.entities.playlists[ownProps.match.params.playlistId],
        albums: store.entities.albums,
        artists: store.entities.artists,
        tracks: Object.values(store.entities.tracks),
    };
};

const mapDTP = (dispatch) => ({
    getPlaylistDetails: (playlistId) =>
        dispatch(getPlaylistDetails(playlistId)),

    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),

    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),

    addTracks: (tracks) => dispatch(addTracks(tracks)),
});

export default connect(mapSTP, mapDTP)(PlaylistShow);

//ext
import { connect } from "react-redux";
//int - components
import MusicPlayer from "./music_player";
//int - actions
import {
    play,
    pause,
    toggle,
    next,
    prev,
    toggleLoop,
    toggleShuffle,
} from "../../actions/music_actions";

const mapSTP = ({ music, entities }) => {
    let currentTrack, currentAlbum, currentArtist;

    if (music.currentTrack) {
        currentTrack = music.currentTrack;
        currentAlbum = entities.albums[currentTrack.albumId];
        currentArtist = entities.artists[currentAlbum.artistId];
    }

    return {
        music: music,
        currentTrack: currentTrack,
        currentAlbum: currentAlbum,
        currentArtist: currentArtist,
    };
};

const mapDTP = (dispatch) => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    toggle: () => dispatch(toggle()),
    next: () => dispatch(next()),
    prev: () => dispatch(prev()),
    toggleLoop: () => dispatch(toggleLoop()),
    toggleShuffle: () => dispatch(toggleShuffle()),
});

export default connect(mapSTP, mapDTP)(MusicPlayer);

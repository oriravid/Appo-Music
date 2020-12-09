//ext
import { connect } from "react-redux";
//int - components
import MusicPlayer from "./music_player";
//int - actions
import { play, pause, next, prev } from "../../actions/music_actions";

const mapSTP = ({ music }) => {
    return {
        music: music,
        currentTrack: music.currentTrack,
    };
};

const mapDTP = (dispatch) => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    next: () => dispatch(next()),
    prev: () => dispatch(prev()),
});

export default connect(mapSTP, mapDTP)(MusicPlayer);

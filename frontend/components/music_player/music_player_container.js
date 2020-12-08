//ext
import { connect } from "react-redux";
//int - components
import MusicPlayer from "./music_player";
//int - actions
import { play, pause } from "../../actions/music_actions";

const mapSTP = ({ music }) => ({
    music: music,
});

const mapDTP = (dispatch) => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
});

export default connect(mapSTP, mapDTP)(MusicPlayer);

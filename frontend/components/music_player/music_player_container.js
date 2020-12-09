//ext
import { connect } from "react-redux";
//int - components
import MusicPlayer from "./music_player";
//int - actions
import { play, pause } from "../../actions/music_actions";

const mapSTP = ({ music, artists, albums }) => {
    return {
        music: music,
        currentTrack: music.queue[music.queueIndex],
    };
};

const mapDTP = (dispatch) => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
});

export default connect(mapSTP, mapDTP)(MusicPlayer);

//ext
import React, { Component } from "react";
import { connect } from "react-redux";
//int - actions
import { next, previous } from "../../actions/music_actions";
//int - util
import * as icons from "../../utils/icons";

class MusicControls extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.music.playing === false) {
            var playpause = icons.play("icon", this.props.play);
        } else {
            var playpause = icons.pause("icon", this.props.pause);
        }
        return (
            <React.Fragment>
                <div className="controls">
                    {icons.shuffle("icon", () => console.log("shuffle"))}
                    {icons.previous("icon", () => console.log("previous"))}
                    {playpause}
                    {icons.next("icon", () => console.log("next"))}
                    {icons.loop("icon", () => console.log("loop"))}
                </div>
            </React.Fragment>
        );
    }
}

const mapSTP = ({ music }) => ({
    music: music,
});

const mapDTP = (dispatch) => ({
    next: () => dispatch(next()),
    previous: () => dispatch(previous()),
});

export default connect(mapSTP, mapDTP)(MusicControls);

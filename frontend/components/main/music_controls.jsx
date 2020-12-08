//ext
import React, { Component } from "react";
import { connect } from "react-redux";

class MusicControls extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.music.playing === false) {
            var playpause = (
                <img
                    src={"/assets/icons/play.svg"}
                    className="icon"
                    onClick={this.props.play}
                />
            );
        } else {
            var playpause = (
                <img
                    src={"/assets/icons/pause.svg"}
                    className="icon"
                    onClick={this.props.pause}
                />
            );
        }
        return (
            <React.Fragment>
                <div className="controls">
                    <img
                        src={"/assets/icons/shuffle.svg"}
                        className="icon"
                        onClick={() => console.log("Shuffle")}
                    />
                    <img
                        src={"/assets/icons/previous.svg"}
                        className="icon"
                        onClick={() => console.log("Previous")}
                    />
                    {playpause}
                    <img
                        src={"/assets/icons/next.svg"}
                        className="icon"
                        onClick={() => console.log("Next")}
                    />
                    <img
                        src={"/assets/icons/loop.svg"}
                        className="icon"
                        onClick={() => console.log("Loop")}
                    />
                </div>
            </React.Fragment>
        );
    }
}

const mapSTP = ({ music }) => ({
    music: music,
});

export default connect(mapSTP)(MusicControls);

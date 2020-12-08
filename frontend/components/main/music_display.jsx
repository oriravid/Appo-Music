//ext
import React, { Component } from "react";
import { connect } from "react-redux";

class MusicDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            duration: null,
        };
    }

    handleUserScrub(e) {
        clearInterval(this.currentTimeInterval);
        this.audio.currentTime = e.target.value;
    }

    componentDidMount() {
        this.scrub.value = 0;

        this.audio.onplay = () => {
            this.currentTimeInterval = setInterval(() => {
                this.scrub.value = this.props.audio.currentTime;
            }, 500);
        };
    }

    render() {
        return (
            <React.Fragment>
                <input
                    ref={(scrub) => {
                        this.scrub = scrub;
                    }}
                    type="range"
                    min="0"
                    max={this.state.duration}
                    onChange={this.handleUserScrub.bind(this)}
                />
            </React.Fragment>
        );
    }
}

const mapSTP = ({ music }) => ({
    music: music,
});

export default connect(mapSTP)(MusicDisplay);

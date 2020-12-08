//ext
import React, { Component } from "react";
import { connect } from "react-redux";
//int - components
import MusicControls from "./music_controls";
import MusicDisplay from "./music_display";
//int - actions
import { play, pause } from "../../actions/music_actions";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            duration: null,
        };
    }

    handlePlay() {
        this.audio.play();
        this.props.play();
    }

    handlePause() {
        this.audio.pause();
        this.props.pause();
    }

    handleUserScrub(e) {
        clearInterval(this.currentTimeInterval);
        this.audio.currentTime = e.target.value;
    }

    handleVolume(e) {
        this.audio.volume = e.target.value;
    }

    componentDidMount() {
        this.scrub.value = 0;
        this.currentTimeInterval = null;

        this.audio.onloadedmetadata = function () {
            this.setState({ duration: this.audio.duration });
        }.bind(this);

        this.audio.onplay = () => {
            this.currentTimeInterval = setInterval(() => {
                this.scrub.value = this.audio.currentTime;
            }, 500);
        };

        this.audio.onpause = () => {
            clearInterval(this.currentTimeInterval);
        };
    }

    render() {
        const src = `${
            this.props.music.queue[this.props.music.queueIndex].url
        }`;

        return (
            <div className="music-player">
                <audio
                    ref={(audio) => {
                        this.audio = audio;
                    }}
                    src={src}
                />
                <MusicControls
                    play={this.handlePlay.bind(this)}
                    pause={this.handlePause.bind(this)}
                />
                <MusicDisplay />
                <input
                    ref={(scrub) => {
                        this.scrub = scrub;
                    }}
                    type="range"
                    min="0"
                    max={this.state.duration}
                    onChange={this.handleUserScrub.bind(this)}
                />
                <input
                    ref={(volume) => {
                        this.volume = volume;
                    }}
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    onChange={this.handleVolume.bind(this)}
                />
            </div>
        );
    }
}

const mapSTP = ({ music }) => ({
    music: music,
});

const mapDTP = (dispatch) => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
});

export default connect(mapSTP, mapDTP)(MusicPlayer);

{
    /*
                <div className="display">
                    <img src="/" className="album-artwork" />
                    <div className="display-inner">
                        <div className="song-info">
                            <span>Song Title</span>
                            <span>Artist - Album</span>
                        </div>
                        <div className="slider"></div>
                    </div>
                </div>
                <div className="volume">
                    <img
                        src={"/assets/icons/volume.svg"}
                        className="icon"
                        onClick={() => console.log("Volume")}
                    />
                    <input
                        className="volume-scrubber"
                        min="0"
                        max="1"
                        step="0.05"
                        // style="--volume: 0%"
                        role="slider"
                        aria-label="Volume"
                        // aria-valuetext="0%"
                        aria-orientation="horizontal"
                        type="range"
                    ></input>
                </div> */
}

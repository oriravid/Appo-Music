//ext
import React, { Component } from "react";
//int - components
import MusicControls from "./music_controls";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            duration: null,
            shuffle: false,
            repeat: false,
        };
    }

    statePlay() {
        this.props.play();
    }

    statePause() {
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
        if (this.props.music.on) {
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
    }

    componentDidUpdate() {
        if (this.props.music.playing) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    render() {
        const { music, currentTrack } = this.props;

        if (music.on) {
            var url = `${currentTrack.url}`;
            var title = currentTrack.title;

            var display = (
                <React.Fragment>
                    <img src="/" className="album-artwork" />
                    <div className="display-inner">
                        <div className="song-info">
                            <span>{title}</span>
                            <br />
                            <span>Artist - Album</span>
                        </div>
                        <div className="slider">
                            <input
                                ref={(scrub) => {
                                    this.scrub = scrub;
                                }}
                                type="range"
                                min="0"
                                max={this.state.duration}
                                onChange={this.handleUserScrub.bind(this)}
                            />
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            var display = (
                <React.Fragment>
                    <p>LOGO</p>
                </React.Fragment>
            );
        }

        return (
            <div className="music-player">
                <audio
                    ref={(audio) => {
                        this.audio = audio;
                    }}
                    src={url}
                />
                <MusicControls
                    play={this.statePlay.bind(this)}
                    pause={this.statePause.bind(this)}
                />
                <div className="display">{display}</div>
                <div className="volume">
                    <img
                        src={"/assets/icons/volume.svg"}
                        className="icon"
                        onClick={() => console.log("Volume")}
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
            </div>
        );
    }
}

export default MusicPlayer;

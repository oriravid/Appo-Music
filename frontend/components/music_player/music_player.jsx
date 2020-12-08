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
        const currentTrack = this.props.music.queue[
            this.props.music.queueIndex
        ];
        const url = `${currentTrack.url}`;
        const title = currentTrack.title;

        return (
            <div className="music-player">
                <audio
                    ref={(audio) => {
                        this.audio = audio;
                    }}
                    src={url}
                />
                <MusicControls
                    play={this.handlePlay.bind(this)}
                    pause={this.handlePause.bind(this)}
                />
                <div className="display">
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
                </div>
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

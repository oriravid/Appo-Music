//ext
import React, { Component } from "react";
//int - components
import MusicControls from "./music_controls";
//int - util
import * as icons from "../../utils/icons";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            duration: null,
        };
    }

    handleScrub(e) {
        clearInterval(this.timeSetter);
        this.audio.currentTime = e.target.value;
    }

    handleVolume(e) {
        this.audio.volume = e.target.value;
    }

    handleEnd() {
        console.log("END!");
    }

    componentDidMount() {
        this.audio.onloadedmetadata = function () {
            this.setState({ duration: this.audio.duration });
        }.bind(this);

        this.audio.onplay = () => {
            this.timeSetter = setInterval(() => {
                this.scrub.value = this.audio.currentTime;
                console.log(this.audio.currentTime);
            }, 500);
        };

        this.audio.onpause = () => {
            clearInterval(this.timeSetter);
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.music.on) {
            this.scrub.value = 0;
            this.timeSetter = null;
        }

        if (this.props.music.playing) {
            this.audio.play();
        } else {
            this.audio.pause();
        }

        if (this.props.currentTrack !== prevProps.currentTrack) {
            this.audio.src = this.props.currentTrack.url;
        }
    }

    render() {
        const { music, currentTrack } = this.props;

        if (currentTrack) {
            var url = `${currentTrack.url}`;
            var title = currentTrack.title;
        } else {
            var url,
                title = "";
        }

        if (music.on) {
            var display = (
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
                                onChange={this.handleScrub.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            );
        } else {
            var display = (
                <div className="display">
                    <h2>MUSIC OFF</h2>
                </div>
            );
        }

        if (music.playing === false) {
            var playpause = icons.play("icon lrg", this.props.play);
        } else {
            var playpause = icons.pause("icon lrg", this.props.pause);
        }

        return (
            <div className="music-player">
                <audio
                    ref={(audio) => {
                        this.audio = audio;
                    }}
                    src={url}
                />

                <div className="controls">
                    {icons.shuffle("icon sml", () => console.log("shuffle"))}
                    {icons.previous("icon med", this.props.prev)}
                    {playpause}
                    {icons.next("icon med", this.props.next)}
                    {icons.loop("icon sml", () => console.log("loop"))}
                </div>

                {display}

                <div className="volume">
                    {icons.volume("icon", () => console.log("volume"))}
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

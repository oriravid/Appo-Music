//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
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

    componentDidMount() {
        this.audio.onloadedmetadata = function () {
            this.setState({ duration: this.audio.duration });
        }.bind(this);

        this.audio.onplay = () => {
            this.timeSetter = setInterval(() => {
                this.scrub.value = this.audio.currentTime;
            }, 500);
        };

        this.audio.onpause = () => {
            clearInterval(this.timeSetter);
        };

        this.audio.onended = () => {
            this.props.next();
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.music.on) {
            this.scrub.value = 0;
            this.timeSetter = null;

            if (this.props.currentTrack !== prevProps.currentTrack) {
                this.audio.src = this.props.currentTrack.url;
            }
        }

        if (this.props.music.playing) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    render() {
        const { music, currentTrack, currentAlbum, currentArtist } = this.props;

        let trackUrl,
            trackTitle,
            albumId,
            albumUrl,
            albumTitle,
            artistId,
            artistName;

        if (currentTrack) {
            trackUrl = currentTrack.url;
            trackTitle = currentTrack.title;
            albumId = currentAlbum.id;
            albumUrl = currentAlbum.url;
            albumTitle = currentAlbum.title;
            artistId = currentArtist.id;
            artistName = currentArtist.name;
        }

        if (music.on) {
            var display = (
                <div className="display">
                    <img src={albumUrl} className="album-artwork" />
                    <div className="display-inner">
                        <div className="song-info">
                            <span className="track-title">{trackTitle}</span>
                            <span className="artist-album">
                                <Link to={`/artists/${artistId}`}>
                                    {artistName}
                                </Link>
                                {" — "}
                                <Link to={`/albums/${albumId}`}>
                                    {albumTitle}
                                </Link>
                            </span>
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
                                className="slider-input pointer"
                            />
                        </div>
                    </div>
                </div>
            );
        } else {
            var display = (
                <div className="display off">
                    <h2>A</h2>
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
                <div className="music-player-inner">
                    <audio
                        ref={(audio) => {
                            this.audio = audio;
                        }}
                        src={trackUrl}
                    />

                    <div className="controls">
                        {icons.shuffle("icon sml", () =>
                            console.log("shuffle")
                        )}
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
                            className="volume-input pointer"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MusicPlayer;

//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
//int - util
import * as icons from "../../utils/icons";
import { timeFormatter } from "../../utils/various";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            duration: null,
            currentTime: null,
            timeLeft: null,
        };
    }

    handleScrub(e) {
        // clearInterval(this.timeSetter);
        this.audio.currentTime = e.target.value;
        // this.handleInterval();
    }

    handleInterval() {
        this.timeSetter = setInterval(() => {
            this.scrub.value = this.audio.currentTime;
            this.setState({
                currentTime: this.audio.currentTime,
                timeLeft: this.state.duration - this.audio.currentTime,
            });
        }, 500);
    }

    handleVolume(e) {
        this.audio.volume = e.target.value;
    }

    componentDidUpdate(prevProps) {
        clearInterval(this.timeSetter);
        if (this.props.music.on) {
            // this.timeSetter = null;
            // this.scrub.value = this.scrub.value || 0;

            if (this.props.currentTrack !== prevProps.currentTrack) {
                this.audio.src = this.props.currentTrack.url;
            }

            this.audio.onloadedmetadata = function () {
                this.setState({ duration: this.audio.duration });
            }.bind(this);
        }

        if (this.props.music.playing) {
            this.audio.play();

            this.handleInterval();

            this.audio.onended = () => {
                this.props.next();
            };
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
                        <div className="times">
                            <span>{timeFormatter(this.state.currentTime)}</span>
                            <span>-{timeFormatter(this.state.timeLeft)}</span>
                        </div>
                    </div>
                </div>
            );
        } else {
            var display = <div className="display off">{icons.fire()}</div>;
        }

        //icon conditional styling
        var sActive = "",
            lActive = "",
            disabled = "";
        if (music.shuffle) sActive = " color";
        if (music.loop) lActive = " color";
        if (!music.on) disabled = " disabled";

        //play pause icons conditional display
        if (music.playing === false) {
            var playpause = icons.play(`icon lrg${disabled}`, this.props.play);
        } else {
            var playpause = icons.pause(
                `icon lrg${disabled}`,
                this.props.pause
            );
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
                        {icons.shuffle(
                            `icon sml${sActive}`,
                            this.props.toggleShuffle
                        )}
                        {icons.previous(`icon med${disabled}`, this.props.prev)}
                        {playpause}
                        {icons.next(`icon med${disabled}`, this.props.next)}
                        {icons.loop(
                            `icon sml${lActive}`,
                            this.props.toggleLoop
                        )}
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

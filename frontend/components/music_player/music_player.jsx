//ext
import React from "react";
import { Link } from "react-router-dom";
//int - util
import * as icons from "../../utils/icons";
import { timeFormatter } from "../../utils/various";
import { increasePlayCount } from "../../utils/tracks_api_utils";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            duration: null,
            currentTime: null,
            timeLeft: null,
        };
    }

    handleInterval() {
        this.timeSetter = setInterval(() => {
            this.scrub.value = this.audio.currentTime;
            this.setState({
                currentTime: this.audio.currentTime,
                timeLeft: this.state.duration - this.audio.currentTime,
            });
        }, 250);
    }

    bufferNext() {
        const { music } = this.props;
        if (music.index + 1 < music.queue.length)
            new Audio(music.queue[music.index + 1].url);
    }

    handleScrub(e) {
        this.audio.currentTime = e.target.value;
    }

    handleNextPrev(action) {
        if (this.state.currentTime > this.state.timeLeft) {
            increasePlayCount(this.props.currentTrack.id);
        }

        if (this.props.music.queue.length == 1 && this.props.music.loop) {
            this.audio.currentTime = 0;
        } else {
            action == "next" ? this.props.next() : this.props.prev();
        }
    }

    handleVolume(e) {
        this.audio.volume = e.target.value;
    }

    //Fade in for logged out users
    handleFadeIn() {
        if (this.audio.volume === 0) return;
        this.fadingIn = true;
        this.audio.volume = 0;

        this.fadeIn = setInterval(() => {
            if (Math.round(this.audio.volume * 100) < this.volume.value * 99) {
                this.audio.volume += 0.01;
            } else {
                this.fadingIn = false;
                clearInterval(this.fadeIn);
            }
        }, 40);
    }

    //Fade out for logged out users
    handleFadeOut() {
        if (this.audio.volume === 0) return;
        this.fadingOut = true;

        this.fadeOut = setInterval(() => {
            if (Math.round(this.audio.volume * 100) > 1) {
                this.audio.volume -= 0.01;
            }
        }, 40);
    }

    //Hits db for logged in users, hits store for logged out users
    toggleSetting(opt) {
        if (this.props.currentUser) {
            this.props.toggleSetting(opt);
        } else {
            if (opt === "shuffle") {
                this.props.toggleShuffle();
            } else if (opt === "loop") {
                this.props.toggleLoop();
            }
        }
    }

    componentDidMount() {
        //check user shuffle & loop settings
        const { music, currentUser, toggleLoop, toggleShuffle } = this.props;

        if (currentUser) {
            if (music.loop !== currentUser.settings.loop) {
                toggleLoop();
            }

            if (music.shuffle !== currentUser.settings.shuffle) {
                toggleShuffle();
            }
        }

        //spacebar play/pause logic
        document.body.addEventListener("keydown", (e) => {
            if (e.code === "Space" && e.target == document.body)
                e.preventDefault();
        });

        document.body.addEventListener("keyup", (e) => {
            if (e.code === "Space" && e.target == e.currentTarget) {
                if (this.props.music.on) this.props.toggle();
            }
        });
    }

    componentDidUpdate(prevProps) {
        // console.log(
        //     `Audio Volume: ${this.audio.volume} | Volume Fader: ${this.volume.value}`
        // );

        clearInterval(this.timeSetter);
        if (this.props.music.on) {
            if (this.props.currentTrack !== prevProps.currentTrack) {
                this.audio.src = this.props.currentTrack.url;
            }

            this.audio.onloadedmetadata = () =>
                this.setState({ duration: this.audio.duration });
        }

        if (this.props.music.playing) {
            //Preview logic

            if (!this.props.currentUser && this.audio.duration > 60) {
                const previewStart = this.audio.duration * 0.25;
                const previewEnd = previewStart + 30;

                if (this.audio.currentTime < previewStart) {
                    this.audio.currentTime = previewStart;
                    if (!this.fadingIn) this.handleFadeIn();
                }

                if (this.audio.currentTime > previewEnd - 5) {
                    if (!this.fadingOut) this.handleFadeOut();
                }

                if (this.audio.currentTime > previewEnd) {
                    this.handleNextPrev("next");
                    clearInterval(this.fadeOut);
                    this.fadingOut = false;
                }
            } else {
                this.audio.volume = this.volume.value;
            }

            //Start playback, set scrubber interval, set next callback
            this.audio.play();
            // this.audio.oncanplay = () => this.bufferNext();
            this.handleInterval();
            this.audio.onended = () => {
                this.handleNextPrev("next");
            };
        } else {
            this.audio.pause();
        }

        //Clean up fade functions and makes sure volume is set properly
        //when user logs in
        if (!prevProps.currentUser && this.props.currentUser) {
            clearInterval(this.fadeIn);
            clearInterval(this.fadeOut);
            this.audio.volume = this.volume.value;
        }
    }

    render() {
        const { music, currentTrack, currentAlbum, currentArtist } = this.props;

        const isChrome =
            !!window.chrome &&
            (!!window.chrome.webstore || !!window.chrome.runtime);

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
                    <Link to={`/albums/${albumId}`}>
                        <img src={albumUrl} className="album-artwork pointer" />
                    </Link>
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
                        {isChrome ? (
                            <React.Fragment>
                                <div className="slider">
                                    <input
                                        ref={(scrub) => {
                                            this.scrub = scrub;
                                        }}
                                        type="range"
                                        min="0"
                                        max={this.state.duration}
                                        onChange={
                                            this.props.currentUser
                                                ? this.handleScrub.bind(this)
                                                : () => {}
                                        }
                                        className={`slider-input${
                                            this.props.currentUser
                                                ? " pointer"
                                                : ""
                                        }`}
                                    />
                                </div>
                                <div className="times">
                                    <span>
                                        {timeFormatter(this.state.currentTime)}
                                    </span>
                                    <span>
                                        -{timeFormatter(this.state.timeLeft)}
                                    </span>
                                </div>
                            </React.Fragment>
                        ) : (
                            ""
                        )}
                    </div>
                    {this.props.currentUser ? (
                        ""
                    ) : (
                        <div
                            className="music-preview pointer"
                            onClick={() => this.props.openSigninModal()}
                        >
                            PREVIEW
                        </div>
                    )}
                </div>
            );
        } else {
            var display = <div className="display off">{icons.cloud()}</div>;
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
                        {icons.shuffle(`icon sml${sActive}`, () =>
                            this.toggleSetting("shuffle")
                        )}
                        {icons.previous(`icon med${disabled}`, () =>
                            this.handleNextPrev("prev")
                        )}
                        {playpause}
                        {icons.next(`icon med${disabled}`, () =>
                            this.handleNextPrev("next")
                        )}
                        {icons.loop(`icon sml${lActive}`, () =>
                            this.toggleSetting("loop")
                        )}
                    </div>

                    {display}

                    <div className="volume">
                        {icons.volume("icon")}
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

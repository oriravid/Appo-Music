//int
import React, { Component } from "react";

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            duration: null,
        };
    }

    render() {
        return (
            <div className="music-player">
                <div className="controls">
                    <span>SH</span>
                    <span>PR</span>
                    <span>PL</span>
                    <span>NX</span>
                    <span>LP</span>
                </div>
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
                    <span>？</span>
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
                </div>
            </div>
        );
    }
}

export default MusicPlayer;

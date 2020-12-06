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
                    <img
                        src={"/assets/icons/play.svg"}
                        className="icon"
                        onClick={() => console.log("Play")}
                    />
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
                </div>
            </div>
        );
    }
}

export default MusicPlayer;

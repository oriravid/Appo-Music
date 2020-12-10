//ext
import React, { Component } from "react";
//int
import AlbumsIndexContainer from "../albums/albums_index_container";

class Browse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="header-section">
                    <h1>Browse</h1>
                </div>
                <div className="featured-section">
                    <div className="featured-container">
                        <h2>Featured 1</h2>
                    </div>
                    <div className="featured-container">
                        <h2>Featured 2</h2>
                    </div>
                </div>
                <div className="album-shelf vertical">
                    <h2>New Music</h2>
                    <AlbumsIndexContainer />
                </div>
                <div className="album-shelf vertical">
                    <h2>Popular</h2>
                    <AlbumsIndexContainer />
                </div>
            </React.Fragment>
        );
    }
}

export default Browse;

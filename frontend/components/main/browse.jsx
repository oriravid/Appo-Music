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
                <h1>I am the /browse container!</h1>
                <AlbumsIndexContainer />
            </React.Fragment>
        );
    }
}

export default Browse;

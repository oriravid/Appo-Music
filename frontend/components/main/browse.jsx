//ext
import React, { Component } from "react";
//int
import AlbumsIndex from "./albums_index";

class Browse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h1>I am the /browse container!</h1>
                <AlbumsIndex />
            </React.Fragment>
        );
    }
}

export default Browse;

//ext
import React, { Component } from "react";
import { connect } from "react-redux";
//int
// import Albums from "./albums";

class Library extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Library</h1>
                {/* <Albums /> */}
            </React.Fragment>
        );
    }
}

// const mapSTP = (state) => ({
//     playlists: state.entities.playlists,
// });

export default connect(null)(Library);

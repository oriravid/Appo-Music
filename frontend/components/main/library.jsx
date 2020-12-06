//ext
import React, { Component } from "react";
import { connect } from "react-redux";

class Library extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Library</h1>
                <h2>This is an h2</h2>
                <h3>This is an h3</h3>
                <p>
                    Dave wasn't exactly sure how he had ended up in this
                    predicament. He ran through all the events that had lead to
                    this current situation and it still didn't make sense. He
                    wanted to spend some time to try and make sense of it all,
                    but he had higher priorities at the moment. The first was
                    how to get out of his current situation of being naked in a
                    tree with snow falling all around and no way for him to get
                    down.
                </p>
            </React.Fragment>
        );
    }
}

// const mapSTP = (state) => ({
//     playlists: state.entities.playlists,
// });

export default connect(null)(Library);

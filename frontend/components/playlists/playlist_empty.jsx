//ext
import React from "react";

const PlaylistEmpty = ({ playlist }) => {
    return (
        <React.Fragment>
            <div className="header-section">
                <h1>{playlist.title}</h1>
                <p style={{ margin: "20px 0" }}>
                    Looks like this playlist is empty :(
                </p>
            </div>
        </React.Fragment>
    );
};

export default PlaylistEmpty;

//ext
import React from "react";
//int - utils
import * as icons from "../../utils/icons";

const Empty = ({ location, playlist, handleDelete }) => {
    if (location === "playlist") {
        return (
            <div className="album-header playlist">
                <div className="playlist-header">
                    <h1>{playlist.title}</h1>
                    <div className="playlist-actions">
                        {icons.trash("icon color pointer", handleDelete)}
                    </div>
                </div>
                <div className="empty-section">
                    <h2>It looks like this playlist is empty.</h2>{" "}
                    <p>
                        To get started, navigate to an album and select{" "}
                        {icons.list("icon inline ms color")} on a track you'd
                        like to add to this playlist.
                    </p>
                </div>
            </div>
        );
    } else if (location === "library") {
        return (
            <React.Fragment>
                <div className="header-section">
                    <h1>Library</h1>
                </div>
                <div className="empty-section">
                    <h2>
                        It looks like you haven't added any music to your
                        library yet.
                    </h2>{" "}
                    <p>
                        To get started, navigate to an album and select{" "}
                        {icons.add("icon inline ms color")} on a track you'd
                        like to add to your library.
                    </p>
                </div>
            </React.Fragment>
        );
    }
};

export default Empty;

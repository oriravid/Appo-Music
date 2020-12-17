//ext
import React from "react";
//int - utils
import * as icons from "../../utils/icons";

const PlaylistEmpty = ({ playlist, handleDelete }) => {
    return (
        <div className="album-header playlist">
            <div className="playlist-header">
                <h1>{playlist.title}</h1>
                <div className="playlist-actions">
                    {icons.trash("icon color pointer", handleDelete)}
                </div>
            </div>
            <div className="empty-playlist">
                <h2>It looks like this playlist is empty.</h2>{" "}
                <p>
                    To get started, navigate to an album and select the{" "}
                    {icons.list("icon inline ms color")} icon on a track you'd
                    like to add to this playlist.
                </p>
            </div>
        </div>
    );
};

export default PlaylistEmpty;

//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";

const AlbumsIndexItem = ({ album, artist }) => {
    return (
        <li>
            <p>
                <Link to={`/albums/${album.id}/`}>
                    {album.id} - {album.title} - {artist.name}
                </Link>
            </p>
        </li>
    );
};

export default AlbumsIndexItem;

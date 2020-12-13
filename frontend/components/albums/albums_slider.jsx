//ext
import React from "react";
//int - components
import AlbumItem from "../albums/album_item";

const AlbumsSlider = ({ title, albums, artists }) => {
    const albumsList = albums.map((album) => (
        <li key={album.id} className="albums-slider-list-item">
            <AlbumItem
                album={album}
                artist={artists ? artists[album.artistId] : undefined}
                info={"ver"}
            />
        </li>
    ));

    return (
        <div className="albums-slider">
            <h2>{title}</h2>
            <ul className="albums-slider-list">{albumsList}</ul>
        </div>
    );
};

export default AlbumsSlider;

//ext
import React, { Component } from "react";
//int - components
import AlbumsSliderItem from "../albums/albums_slider_item";

const AlbumsSlider = ({ title, albums, artists, tracks }) => {
    const albumsList = albums.map((album) => (
        <AlbumsSliderItem
            key={album.id}
            album={album}
            artist={artists ? artists[album.artistId] : undefined}
            tracks={tracks.filter((track) => track.albumId == album.id)}
        />
    ));

    return (
        <div className="albums-slider">
            <h2>{title}</h2>
            <ul className="albums-slider-list">{albumsList}</ul>
        </div>
    );
};

export default AlbumsSlider;

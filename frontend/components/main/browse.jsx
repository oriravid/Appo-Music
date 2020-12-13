//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
//int - containers
import AlbumsSlider from "../albums/albums_slider";
//int - utils
import { dateSorter, popularSorter } from "../../utils/various";

class Browse extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllAlbums();
    }

    render() {
        const { albums, artists } = this.props;
        if (!albums.length) return null;

        //sort by releaseDate
        const newAlbums = [...albums].sort(dateSorter);

        //sort by playCount
        const popularAlbums = [...albums].sort(popularSorter);

        return (
            <React.Fragment>
                <div className="header-section">
                    <h1>Browse</h1>
                </div>
                <div className="featured-section">
                    <Link to="/albums/8">
                        <div className="featured-container">
                            <p>NEW ALBUM</p>
                            <h2>weird!</h2>
                            <h2>YUNGBLUD</h2>
                            <div className="overlay">
                                <img src="https://images.kerrangcdn.com/YUNGBLUD-WEB-SLEEVE.jpg" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/albums/2">
                        <div className="featured-container">
                            <p>NEW ALBUM</p>
                            <h2>Man On the Moon III: The Chosen</h2>
                            <h2>Kid Cudi</h2>
                            <img src="https://topmovieandtv.com/wp-content/uploads/2020/12/cnewshttpshypebeast.comimage202012kid-cudi-man-on-the-moon-iii-the-chosen-album-stream-tw-860x280.jpg" />
                        </div>
                    </Link>
                </div>
                <AlbumsSlider
                    title={"New Music"}
                    albums={newAlbums}
                    artists={artists}
                />
                <AlbumsSlider
                    title={"Popular"}
                    albums={popularAlbums}
                    artists={artists}
                />
            </React.Fragment>
        );
    }
}

export default Browse;

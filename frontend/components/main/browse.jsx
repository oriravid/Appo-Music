//ext
import React, { Component } from "react";
import { Link } from "react-router-dom";
//int - containers
import Loading from "./loading";
import AlbumsSlider from "../albums/albums_slider";
//int - utils
import { dateSorter, popularSorter } from "../../utils/various";

class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    componentDidMount() {
        document.title = `Appo Music | Browse`;
        this.props
            .getAllAlbums()
            .then((res) => this.setState({ loading: false }));
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }

        const { albums, artists } = this.props;

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
                            <h2>Man On the Moon III: The Chosen</h2>
                            <h2>Kid Cudi</h2>
                            <img src="https://appomusic.com/assets/featured/01.jpg" />
                        </div>
                    </Link>
                    <div
                        className="featured-container"
                        onClick={() => this.props.openModal("about")}
                    >
                        <p>FEATURED</p>
                        <h2>About This Project</h2>
                        <h2>Appo Music</h2>
                        <img src="https://appomusic.com/assets/featured/02.jpg" />
                    </div>
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

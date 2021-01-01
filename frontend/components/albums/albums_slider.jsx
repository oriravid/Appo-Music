//ext
import React, { Component } from "react";
//int - components
import AlbumItem from "../albums/album_item";
//int - utils
import * as icons from "../../utils/icons";

class AlbumsSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollable: null,
            scrolled: false,
        };
    }

    renderArrows() {
        if (this.state.scrollable) {
            return (
                <React.Fragment>
                    <div
                        className="albums-slider-arrow left pointer"
                        onMouseEnter={(e) => this.arrowScroll(e, "left")}
                        onMouseLeave={(e) => this.arrowScroll(e, "stop")}
                    >
                        {icons.arrowLeft("icon xlrg")}
                    </div>
                    <div
                        className="albums-slider-arrow right pointer"
                        onMouseEnter={(e) => this.arrowScroll(e, "right")}
                        onMouseLeave={(e) => this.arrowScroll(e, "stop")}
                    >
                        {icons.arrowRight("icon xlrg")}
                    </div>
                </React.Fragment>
            );
        }
    }

    arrowScroll(e, opt) {
        if (opt === "right") {
            this.scrollInterval = setInterval(
                () => (this.scroller.scrollLeft += 5),
                7.5
            );
        } else if (opt === "left") {
            this.scrollInterval = setInterval(
                () => (this.scroller.scrollLeft -= 5),
                7.5
            );
        } else if (opt === "stop") {
            clearInterval(this.scrollInterval);
        }
    }

    handleScroll(e) {
        this.setState({
            scrolled: e.currentTarget.scrollLeft > 0 ? true : false,
        });
    }

    componentDidMount() {
        this.setState({
            scrollable: this.props.albums.length > 5 ? true : false,
        });
    }

    render() {
        const { title, albums, artists } = this.props;

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
                <div className="albums-slider-edges"></div>
                <h2>{title}</h2>
                {this.renderArrows()}
                <ul
                    ref={(scroller) => (this.scroller = scroller)}
                    className={
                        this.state.scrolled
                            ? "albums-slider-list scrolled"
                            : "albums-slider-list"
                    }
                    onScroll={this.handleScroll.bind(this)}
                >
                    {albumsList}
                </ul>
            </div>
        );
    }
}

export default AlbumsSlider;

//ext
import React, { Component } from "react";
//int - containers
import SearchResults from "./search_results";
//int - util
import * as icons from "../../utils/icons";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
        };
    }

    handleInput(e) {
        this.setState({ searchQuery: e.currentTarget.value });
    }

    handleSearch(e, iconClick) {
        if ((e.key === "Enter" || iconClick) && this.state.searchQuery) {
            this.props.runSearch(this.state.searchQuery);
        }
    }

    render() {
        return (
            <div className="input-container search">
                {icons.search("icon pointer", (e) =>
                    this.handleSearch(e, true)
                )}
                <input
                    type="text"
                    placeholder="Search"
                    onChange={this.handleInput.bind(this)}
                    onKeyPress={this.handleSearch.bind(this)}
                ></input>
                {Object.values(this.props.searchResults).length ? (
                    <SearchResults results={this.props.searchResults} />
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default Search;

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
        this.setState({ searchQuery: e.currentTarget.value }, () => {
            if (this.state.searchQuery) {
                this.props.runSearch(this.state.searchQuery);
            } else {
                this.props.clearSearch();
            }
        });
    }

    handleClearSearch() {
        this.setState({ searchQuery: "" });
        this.props.clearSearch();
    }

    render() {
        return (
            <div className="input-container search">
                {icons.search("icon")}
                <input
                    type="text"
                    placeholder="Search"
                    onChange={this.handleInput.bind(this)}
                    onKeyDown={(e) => {
                        if (e.key === "Escape") {
                            this.handleClearSearch();
                        }
                    }}
                    value={this.state.searchQuery}
                />
                {Object.values(this.props.searchResults).length ? (
                    <SearchResults
                        results={this.props.searchResults}
                        clearSearch={this.handleClearSearch.bind(this)}
                    />
                ) : (
                    ""
                )}
                {this.state.searchQuery
                    ? icons.close("icon pointer", () =>
                          this.handleClearSearch()
                      )
                    : ""}
            </div>
        );
    }
}

export default Search;

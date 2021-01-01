//ext
import React, { Component } from "react";
import { withRouter } from "react-router";

const SearchResults = ({ results, clearSearch, history }) => {
    const { artists, albums, tracks } = results;
    var resultsEmpty = Object.values(results).every((result) => !result.length);

    const renderResults = (typeResults, type) => {
        if (!typeResults.length) return;

        return (
            <React.Fragment>
                <ul className="search-results-list">
                    <span className="search-results-list-title">{type}</span>
                    {typeResults.map((result) => (
                        <li
                            className="search-results-list-item pointer"
                            key={result.id}
                            onClick={() => handleResultClick(result, type)}
                        >
                            <div
                                className="search-image"
                                style={{
                                    backgroundImage: `url(${result.url})`,
                                }}
                            ></div>
                            <span>
                                {type === "Artists"
                                    ? result.name.length < 32
                                        ? result.name
                                        : result.name.slice(0, 29) + "..."
                                    : result.title.length < 32
                                    ? result.title
                                    : result.title.slice(0, 29) + "..."}
                            </span>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    };

    const handleResultClick = (result, type) => {
        if (type === "Songs") {
            history.push({
                pathname: `/albums/${result.albumId}`,
                trackId: result.id,
            });
        } else {
            history.push(`/${type.toLowerCase()}/${result.id}`);
        }
        clearSearch();
    };

    if (resultsEmpty) {
        return (
            <div className="search-results-container no-results">
                <span>No results found</span>
            </div>
        );
    } else {
        return (
            <div className="search-results-container">
                {renderResults(artists, "Artists")}
                {renderResults(albums, "Albums")}
                {renderResults(tracks, "Songs")}
            </div>
        );
    }
};

export default withRouter(SearchResults);

//ext
import { connect } from "react-redux";
//int - containers
import Search from "./search";
//int - actions
import { runSearch } from "../../actions/search_actions";

const mapSTP = ({ ui }) => ({
    searchResults: ui.search,
});

const mapDTP = (dispatch) => ({
    runSearch: (searchQuery) => dispatch(runSearch(searchQuery)),
});

export default connect(mapSTP, mapDTP)(Search);

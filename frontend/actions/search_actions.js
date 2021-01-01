//int - utils
import * as SearchAPI from "../utils/search_api_utils";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const receiveSearchResults = (payload) => ({
    type: RECEIVE_SEARCH_RESULTS,
    payload: payload,
});

export const clearSearch = () => ({
    type: CLEAR_SEARCH_RESULTS,
});

// Thunk Actions
export const runSearch = (searchQuery) => (dispatch) =>
    SearchAPI.runSearch(searchQuery).then((payload) =>
        dispatch(receiveSearchResults(payload))
    );

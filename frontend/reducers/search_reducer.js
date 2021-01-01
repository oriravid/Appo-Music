//int
import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.payload;
        default:
            return state;
    }
};

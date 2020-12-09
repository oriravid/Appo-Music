//int
import {
    RECEIVE_CURRENT_USER,
    SIGNOUT_CURRENT_USER,
} from "../actions/session_actions";

const _nullSession = {
    currentUser: null,
};

export default (state = _nullSession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.user });
        case SIGNOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};

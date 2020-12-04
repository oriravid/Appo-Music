//int
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/ui_actions";

const _initialState = {
    modal: false,
};

export default (state = _initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return { modal: true };
        case CLOSE_MODAL:
            return { modal: false };
        default:
            return state;
    }
};

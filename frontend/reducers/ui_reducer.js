//int
import { TOGGLE_MODAL } from "../actions/ui_actions";

const _defaultUI = {
    modal: false,
};

export default (state = _defaultUI, action) => {
    Object.freeze(state);
    switch (action.type) {
        case TOGGLE_MODAL:
            return { modal: !state.modal };
        default:
            return state;
    }
};

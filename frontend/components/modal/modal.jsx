//ext
import React from "react";
import { connect } from "react-redux";
//int
import { closeModal } from "../../actions/modal_actions";
import SigninFormContainer from "./signin_form_container";
import SignupFormContainer from "./signup_form_container";
import ExtendedText from "./extended_text";
//int - util
import * as icons from "../../utils/icons";

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }

    let component, modalClass;
    switch (modal.modal) {
        case "signin":
            component = <SigninFormContainer />;
            modalClass = "session";
            break;
        case "signup":
            component = <SignupFormContainer />;
            modalClass = "session";
            break;
        case "text":
            component = <ExtendedText />;
            modalClass = "extended-text";
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div
                className={`modal-container ${modalClass}`}
                onClick={(e) => e.stopPropagation()}
            >
                {icons.close("icon close pointer", closeModal)}
                {component}
            </div>
        </div>
    );
};

const mapSTP = (state) => ({
    modal: state.ui.modal,
});

const mapDTP = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapSTP, mapDTP)(Modal);

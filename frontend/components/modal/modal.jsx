//ext
import React from "react";
import { connect } from "react-redux";
//int
import { closeModal } from "../../actions/modal_actions";
import SigninFormContainer from "./signin_form_container";
import SignupFormContainer from "./signup_form_container";

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }

    let component, modalClass;
    switch (modal) {
        case "signin":
            component = <SigninFormContainer />;
            modalClass = "session";
            break;
        case "signup":
            component = <SignupFormContainer />;
            modalClass = "session";
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

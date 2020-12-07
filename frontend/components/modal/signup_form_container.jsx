//ext
import { connect } from "react-redux";
import React from "react";
//int
import SessionForm from "../modal/session_form";
import { signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: "signup",
    };
};

const mapDTP = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        switchForm: (
            <a
                href="#"
                onClick={(e) => (
                    e.preventDefault(), dispatch(openModal("signin"))
                )}
            >
                Existing User Login
            </a>
        ),
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mapSTP, mapDTP)(SessionForm);

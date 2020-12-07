//ext
import { connect } from "react-redux";
import React from "react";
//int
import SessionForm from "../modal/session_form";
import { signin, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: "signin",
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
                    e.preventDefault(), dispatch(openModal("signup"))
                )}
            >
                Create New Account
            </a>
        ),
        processForm: (user) => dispatch(signin(user)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mapSTP, mapDTP)(SessionForm);

//ext
import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
//int
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/ui_actions";

const mapSTP = ({ errors, ui }) => {
    return {
        errors: errors.session,
        formType: "signup",
        navLink: <Link to="/signin">Existing User Login</Link>,
        modal: ui.modal,
    };
};

const mapDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(openModal()),
    };
};

export default connect(mapSTP, mapDTP)(SessionForm);

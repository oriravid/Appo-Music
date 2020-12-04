//ext
import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
//int
import SessionForm from "./session_form";
import { signin, clearErrors } from "../../actions/session_actions";
import { toggleModal } from "../../actions/ui_actions";

const mapSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: "signin",
        navLink: <Link to="/signup">Create New Account</Link>,
    };
};

const mapDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signin(user)),
        clearErrors: () => dispatch(clearErrors()),
        toggleModal: () => dispatch(toggleModal()),
    };
};

export default connect(mapSTP, mapDTP)(SessionForm);

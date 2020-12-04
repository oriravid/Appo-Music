//ext
import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
//int
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";
// import { toggleModal } from "../../actions/ui_actions";

const mapSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: "signup",
        navLink: <Link to="/signin">Existing User Login</Link>,
    };
};

const mapDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        // toggleModal: () => dispatch(toggleModal()),
    };
};

export default connect(mapSTP, mapDTP)(SessionForm);

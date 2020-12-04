//ext
import React from "react";
import { connect } from "react-redux";
//int
import Nav from "./nav";
import { logout } from "../../actions/session_actions";

const mapSTP = (state) => ({
    currentUser: state.session.currentUser,
});

const mapDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapSTP, mapDTP)(Nav);

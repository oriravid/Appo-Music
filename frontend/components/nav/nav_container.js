//ext
import React from "react";
import { connect } from "react-redux";
//int
import Nav from "./nav";
import { logout } from "../../actions/session";

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

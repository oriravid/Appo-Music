//ext
import React from "react";
import { connect } from "react-redux";
//int
import Main from "./main";

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(Main);

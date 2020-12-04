//ext
import React from "react";
import { Route } from "react-router-dom";
//int - containers
import SignupFormContainer from "./session/signup_form_container";
import SigninFormContainer from "./session/signin_form_container";
import NavContainer from "./nav/nav_container";
import MainContainer from "./main/main_container";
//int - utils
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";

export default () => {
    return (
        <div className="app">
            <Route path="/" component={NavContainer} />
            <Route path="/" component={MainContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/signin" component={SigninFormContainer} />
        </div>
    );
};

// <ProtectedRoute path="/chirps" component={ChirpIndexContainer} />
// <AuthRoute path="/signup" component={SignupContainer} />

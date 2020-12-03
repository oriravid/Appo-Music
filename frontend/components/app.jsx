//ext
import React from "react";
import { Route } from "react-router-dom";
//int - containers
import SignupContainer from "./session/signup_container";
import SigninContainer from "./session/signin_container";
import NavContainer from "./nav/nav_container";
import MainContainer from "./main/main_container";
//int - utils
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";

export default () => (
    <div className="app">
        <Route path="/" component={NavContainer} />
        <Route path="/" component={MainContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/signin" component={SigninContainer} />
    </div>
);

// <ProtectedRoute path="/chirps" component={ChirpIndexContainer} />
// <AuthRoute path="/signup" component={SignupContainer} />

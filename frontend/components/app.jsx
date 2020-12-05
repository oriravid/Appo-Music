//ext
import React from "react";
import { Route } from "react-router-dom";
//int - components
import SignupFormContainer from "./session/signup_form_container";
import SigninFormContainer from "./session/signin_form_container";
import Nav from "./nav/nav";
import Main from "./main/main";
//int - utils
import { AuthRoute } from "../utils/route_utils";

export default (props) => {
    return (
        <div className="app">
            <Route path="/" component={Nav} />
            <Route path="/" component={Main} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/signin" component={SigninFormContainer} />
        </div>
    );
};

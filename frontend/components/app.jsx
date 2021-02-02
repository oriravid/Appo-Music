//ext
import React from "react";
import { Route, useHistory } from "react-router-dom";
import ReactGA from "react-ga";
//int - components
import NavContainer from "./nav/nav_container";
import MainContainer from "./main/main_container";
import Modal from "./modal/modal";
//int - util
import { consoleArt } from "../utils/various";

export default () => {
    //console artwork render
    consoleArt();

    //google analytics
    const initializeReactGA = () => {
        ReactGA.initialize("UA-50867458-2");
        ReactGA.pageview("/");
    };
    initializeReactGA();

    //change google analytics pageview on history change
    useHistory().listen((history) => {
        ga("set", "page", history.pathname);
        ga("send", "pageview");
    });

    return (
        <div className="app">
            <Route path="/" component={NavContainer} />
            <Route path="/" component={MainContainer} />
            <Modal />
        </div>
    );
};

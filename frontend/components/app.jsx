//ext
import React from "react";
import { Route } from "react-router-dom";
//int - components
import NavContainer from "./nav/nav_container";
import MainContainer from "./main/main_container";
import Modal from "./modal/modal";

export default () => {
    return (
        <div className="app">
            <Route path="/" component={NavContainer} />
            <Route path="/" component={MainContainer} />
            <Modal />
        </div>
    );
};

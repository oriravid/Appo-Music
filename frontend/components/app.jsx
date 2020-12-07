//ext
import React from "react";
import { Route } from "react-router-dom";
//int - components
import Nav from "./nav/nav";
import Main from "./main/main";
import Modal from "./modal/modal";

export default () => {
    return (
        <div className="app">
            <Route path="/" component={Nav} />
            <Route path="/" component={Main} />
            <Modal />
        </div>
    );
};

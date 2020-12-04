//ext
import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
//int
import App from "./app";

export default ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App store={store} />
        </HashRouter>
    </Provider>
);

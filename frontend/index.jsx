//ext
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
//int
import createStore from "./store/store";
import Root from "./components/root";

const initializeReactGA = () => {
    ReactGA.initialize("2273514016");
    ReactGA.pageview("/");
};
initializeReactGA();

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = undefined;

    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser,
            },
        };
        delete window.currentUser;
    }

    const store = createStore(preloadedState);
    ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});

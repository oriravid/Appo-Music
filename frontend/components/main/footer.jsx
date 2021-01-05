//ext
import React from "react";
import { connect } from "react-redux";
//int - actions
import { openModal } from "../../actions/modal_actions";

const Footer = ({ openModal }) => {
    const handleClick = (e) => {
        e.preventDefault();
        openModal("about");
    };

    return (
        <footer>
            <p className="copyright">
                Copyright © 2020 <a onClick={handleClick}>Appo Inc.</a> All
                rights reserved.
            </p>
            <ul className="footer-links">
                <li className="footer-link">
                    <a onClick={handleClick}>Internet Service Terms</a>
                </li>
                <li className="footer-link">
                    <a onClick={handleClick}>Appo Music & Privacy</a>
                </li>
                <li className="footer-link">
                    <a onClick={handleClick}>Cookie Warning</a>
                </li>
                <li className="footer-link">
                    <a onClick={handleClick}>Support</a>
                </li>
                <li className="footer-link">
                    <a onClick={handleClick}>Feedback</a>
                </li>
            </ul>
        </footer>
    );
};

export const mapDTP = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(null, mapDTP)(Footer);

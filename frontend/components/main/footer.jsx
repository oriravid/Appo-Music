//ext
import React from "react";

const Footer = () => {
    return (
        <footer>
            <p className="copyright">
                Copyright © 2020{" "}
                <a href="#" target="blank">
                    Appo Inc.
                </a>{" "}
                All rights reserved.
            </p>
            <ul className="footer-links">
                <li className="footer-link">
                    <a href="#">Internet Service Terms</a>
                </li>
                <li className="footer-link">
                    <a href="#">Appo Music & Privacy</a>
                </li>
                <li className="footer-link">
                    <a href="#">Cookie Warning</a>
                </li>
                <li className="footer-link">
                    <a href="#">Support</a>
                </li>
                <li className="footer-link">
                    <a href="#">Feedback</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;

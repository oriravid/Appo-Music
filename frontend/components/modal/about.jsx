// ext
import React from "react";
//int - util
import * as icons from "../../utils/icons";

const About = () => {
    return (
        <React.Fragment>
            <div className="about-header">
                {icons.cloud()}
                <h1>Appo Music</h1>
                <h2>by Ori Ravid</h2>
            </div>
            <div className="about-description">
                <p>
                    Appo Music is a full-stack clone of the incredible Apple
                    Music online streaming platform, with an aim to re-create
                    it's core features, seamless design, and excellent user
                    experience.
                </p>
                <p>
                    Written from scratch in just over 10 days, this app utilizes
                    a Ruby on Rails backend and JavaScript ES6/React/Redux
                    frontend.
                </p>
                <p>
                    For detailed technical information, feature
                    highlights/walkthroughs, and more, please visit the{" "}
                    <a
                        href="https://github.com/oriravid/Appo-Music/blob/main/README.md"
                        target="blank"
                    >
                        production readme.
                    </a>
                </p>
            </div>
            <div className="about-contact">
                <span className="thank-you">
                    Thank you kindly for taking the time to view Appo Music!
                </span>
                <span>Please feel free to reach out :)</span>
                <ul>
                    <li>
                        <a href="mailto:ori@oriravid.com">E-Mail</a>
                    </li>
                    <li>•</li>
                    <li>
                        <a
                            href="https://www.oriravid.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>•</li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/oriravid/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>•</li>
                    <li>
                        <a
                            href="https://github.com/oriravid"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default About;

//ext
import React from "react";
//int - util
import * as icons from "../../utils/icons";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleInput(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    handleSubmit(e) {
        if (e) {
            e.preventDefault();
        }
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        const usernameField = document.getElementById("username-field");
        const passwordField = document.getElementById("password-field");
        const demoPassword = ["J", "*", "B", "x", ".", "Y", "8", "6", "!", "R"];

        usernameField.value = "Demo";
        passwordField.value = "";

        demoPassword.forEach((letter, index) => {
            setTimeout(() => (passwordField.value += letter), 150 * index);
        });

        setTimeout(
            () => (
                this.setState({
                    username: usernameField.value,
                    password: passwordField.value,
                }),
                this.handleSubmit()
            ),
            1750
        );
    }

    handleClose(e) {
        if (e.currentTarget === e.target || e.key === "Escape") {
            this.props.history.push("/");
        }
    }

    renderErrors() {
        if (this.props.errors.length !== 0) {
            return (
                <ul className="session-errors-list">
                    {this.props.errors.map((error, idx) => (
                        <li
                            className="session-error error"
                            key={`error-${idx}`}
                        >
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    componentWillUnmount() {
        if (this.props.errors.length) {
            this.props.clearErrors();
        }
    }

    render() {
        let headerText, introText;
        if (this.props.formType === "signin") {
            headerText = "Sign In";
            introText = "Welcome back.";
        } else {
            headerText = "Register";
            introText = "Please fill in your information below.";
        }

        return (
            <div
                className="session-form-modal"
                onClick={this.handleClose.bind(this)}
            >
                <div className="session-form-content">
                    <img
                        src={"/assets/icons/close.svg"}
                        className="icon close"
                        onClick={this.handleClose.bind(this)}
                    />
                    <div className="session-form-text">
                        <h1 className="logo">Appo Music</h1>
                        <h2>{headerText}</h2>
                        <p>{introText}</p>
                    </div>
                    <div className="session-form">
                        <form
                            onSubmit={this.handleSubmit}
                            className="session-form"
                        >
                            <div className="input-container">
                                <input
                                    id="username-field"
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput("username")}
                                    placeholder="Username"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="input-container">
                                <input
                                    id="password-field"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput("password")}
                                    placeholder="Password"
                                    autoComplete="off"
                                />
                                <span onClick={this.handleSubmit}>
                                    {icons.go}
                                </span>
                            </div>
                            <input type="submit" value={headerText} />
                        </form>
                    </div>
                    <div className="session-errors-container">
                        {this.renderErrors()}
                    </div>
                    <div className="session-form-options">
                        {this.props.formType === "signin" ? (
                            <p onClick={this.handleDemoLogin}>Demo Login</p>
                        ) : (
                            <br />
                        )}
                        {this.props.navLink}
                    </div>
                </div>
            </div>
        );
    }
}

export default SessionForm;

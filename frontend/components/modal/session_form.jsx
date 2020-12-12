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
        this.props
            .processForm(this.state)
            .then((res) => this.props.closeModal());
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
            <React.Fragment>
                <div className="session-form-text">
                    {icons.cloud()}
                    <h2>{headerText}</h2>
                    <p>{introText}</p>
                </div>
                <div className="session-form">
                    <form onSubmit={this.handleSubmit} className="session-form">
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
                            <span
                                onClick={this.handleSubmit}
                                className="pointer"
                            >
                                {icons.go("icon color")}
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
                        <p onClick={this.handleDemoLogin} className="pointer">
                            Demo User
                        </p>
                    ) : (
                        <br />
                    )}
                    {this.props.switchForm}
                </div>
            </React.Fragment>
        );
    }
}

export default SessionForm;

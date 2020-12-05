//ext
import React from "react";

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
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        const usernameField = document.getElementById("username-field");
        const passwordField = document.getElementById("password-field");
        const demoPassword = ["d", "e", "m", "o", "d", "e", "m", "o"];

        usernameField.value = "demo";
        passwordField.value = "";

        demoPassword.forEach((letter) => {
            passwordField.value += letter;
        });

        this.setState({
            username: usernameField.value,
            password: passwordField.value,
        });
    }

    renderErrors() {
        if (this.props.errors.length !== 0) {
            return (
                <ul className="session-errors-list">
                    {this.props.errors.map((error, idx) => (
                        <li className="session-error" key={`error-${idx}`}>
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
        const buttonText =
            this.props.formType === "signin" ? "Sign In" : "Register";
        return (
            <div className="session-form-modal">
                <div className="session-form-content">
                    <span className="close">？</span>
                    <h1>Appo Music</h1>
                    <h2>{buttonText}</h2>
                    <p>Welcome back.</p>
                    <form onSubmit={this.handleSubmit} className="session-form">
                        {this.renderErrors()}
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
                        </div>
                        <input type="submit" value={buttonText} />
                    </form>
                    {this.props.navLink}
                    {this.props.formType === "signin" ? (
                        <button onClick={this.handleDemoLogin}>
                            Demo Login
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        );
    }
}

export default SessionForm;

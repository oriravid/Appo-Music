//ext
import React, { Component } from "react";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signin(this.state).then(() => this.props.history.push("/"));
    }

    render() {
        return (
            <div className="session-modal">
                <div className="session-content">
                    <h2>Sign In!</h2>
                    <div className="session-form">
                        <form>
                            <label>
                                Username:
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput("username")}
                                />
                            </label>
                            <label>
                                Password:
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput("password")}
                                />
                            </label>
                            <button onClick={this.handleSubmit}>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;

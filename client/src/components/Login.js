import React, { Component } from "react";
import axios from "axios";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    const { username, password } = this.state;
    axios("/users/login", {
      method: "POST",
      data: {
        username,
        password,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", username);
        // console.log(response);
        this.props.onLogin(username, this.props.history);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    if (localStorage.getItem("username"))
      this.setState({ username: localStorage.getItem("username") });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="login">
        <div className="text-center border border-light p-5" action="#!">
          <p className="h4 mb-4">Sign in</p>
          <input
            type="email"
            id="defaultLoginFormUsername"
            className="form-control mb-4"
            placeholder="Username"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            id="defaultLoginFormPassword"
            className="form-control mb-4"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <div className="d-flex justify-content-around">
            <div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultLoginFormRemember"
                />
                <label
                  className="custom-control-label"
                  htmlFor="defaultLoginFormRemember"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <a href="">Forgot password?</a>
            </div>
          </div>
          <button
            className="btn btn-block my-4"
            type="submit"
            onClick={this.login}
            disabled={!username || !password}
          >
            Sign in
          </button>
          <p>
            Not a member?
            <a href="">Register</a>
          </p>
          <p>or sign in with:</p>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-facebook-f light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-twitter light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-linkedin-in light-blue-text"></i>
          </a>
        </div>
      </div>
    );
  }
}

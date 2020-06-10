
import React, { Component } from "react";
// import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch(`/users`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ users: response });
      });
  };

  addUsers = () => {
    const {
      users,
      
    } = this.state;

    fetch(`/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }, 
      body: JSON.stringify({ users }),
      
    }, {withCredentials: true})
      .then((response) => response.json())
      .then((response) => console.log(response.message));

    this.getUsers();
  };

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const {
      users,
      username,
      password,
      firstname,
      lastname,
      email,
    } = this.state;
    return (
      <div>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            name="username"
            onChange={this.handleInput}
          />
        </div>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={firstname}
            name="firstname"
            onChange={this.handleInput}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            value={lastname}
            name="lastname"
            onChange={this.handleInput}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={this.handleInput}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            name="password"
            onChange={this.handleInput}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={this.addUsers}
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </div>
    );
  }
}

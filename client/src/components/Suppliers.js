import React, { Component } from "react";
import SuppliersCard from "./SuppliersCard";

export default class Suppliers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
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

  render() {
    const { users } = this.state;

    return (
      <div className="container">
        {console.log(users)}

        <div className="d-flex justify-content-center  my-5">
          <div className="square">GOOGLE MAP HERE</div>
        </div>

        <div className="d-flex justify-content-between">
          {users.length && (
            <div className="row">
              {users.map((user, i) => (
                <div key={i}>
                  <SuppliersCard user={user} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

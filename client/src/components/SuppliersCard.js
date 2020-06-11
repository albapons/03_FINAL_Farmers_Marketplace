import React, { Component } from "react";
import "../App.css";

export default class SuppliersCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
        users: {},
    }
}

componentDidMount() {
    this.getUsers();
}



getUsers = () => {
    fetch(`/users/${this.props.id}`)
    .then(response => response.json())
    .then(response => {
        this.setState({ users: response})
    })
}
 

render() {

  const {users} = this.state;

    return (
      <div className="buyersCard">
        <div className="container d-flex justify-content-center my-3">
          <img
            src="https://color.romanuke.com/wp-content/uploads/2016/08/cvetovaya-palitra-2987.png"
            alt="Error"
            width="200px"
            height="200px"
          />
        </div>

        <br />

         {users.id}001
        <h5 className="mt-2">
         
          <strong>{users.company_name}</strong>
        </h5>
        {users.postcode} - {users.city}
        <br />
        {users.tel_no} · {users.mob_no}
        <br />
        {users.website} */
       
      </div>
      
    );
  }
}
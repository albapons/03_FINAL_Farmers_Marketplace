
import React, { Component } from "react";


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
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
    fetch(`/users/signup`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ users: response });
      });
  };

  addUsers = () => {
    const {
      users,
      username,
      password,
      firstname,
      lastname,
      email,
    } = this.state;

    fetch(`/users/signup`, {
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
       
<div className="text-center border border-light p-5" action="#!">

    <p className="h4 mb-4">Sign up</p>

    <div className="form-row mb-4">
        <div className="col">
           
            <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name"  value={firstname}
            name="firstname"
            onChange={this.handleInput}/>
        </div>
        <div className="col">
           
            <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name"  value={lastname}
            name="lastname"
            onChange={this.handleInput}/>
        </div>
    </div>

    <input type="username" id="defaultRegisterFormUsername" className="form-control mb-4" placeholder="Username"  value={username}
            name="username"
            onChange={this.handleInput}/>
   
    <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail"  value={email}
            name="email"
            onChange={this.handleInput}/>

   
    <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" value={password}
            name="password"
            onChange={this.handleInput}/>
    <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
       
    </small>

   
    

    <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter"/>
        <label className="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
    </div>

    <button className="btn btn-info my-4 btn-block" type="submit"  onClick={this.addUsers}>Sign in</button>

   
    <p>or sign up with:</p>

    <a href="#" className="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
    <a href="#" className="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
    <a href="#" className="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
    
    <hr></hr>

    <p>By clicking</p>
        <em>Sign up</em> you agree to our
        <a href="" target="_blank"> terms of service</a>

</div>

      
      </div>
    );
  }
}

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  render() {
    return (
      <div className="App">
        {/* SIDENAV CONTAINER */}
        <div id="mySidenav" className="sidenav">
          <a class="closebtn" onClick={() => this.closeNav()}>
            &times;
          </a>

          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

        {/* <!-- Use any element to open the sidenav --> */}

        <div id="main">
          {/* TOP CONTAINER */}
          <div className="header row">
            <h1> FARMER'S MARKETPLACE</h1>
            <div className="d-flex align-items-center">
              Login
              <i className="fas fa-sign-in-alt mx-3  blue fa-2x"></i>
              {/* If there are a username */}
              {/* Hi username!<i className="fas fa-user-circle mx-3"></i> */}
              {/* If there are not a username */}
            </div>
          </div>

          <div className="row my-5">
            <span className="navBarButton" onClick={() => this.openNav()}>
              <i className="fas fa-chevron-circle-down fa-rotate-90 blue fa-3x"></i>
            </span>
            {/* BODY CONTAINER */}
            <div className="row body">
              <img
                src="https://color.romanuke.com/wp-content/uploads/2016/08/cvetovaya-palitra-2987.png"
                alt="Error"
              />
            </div>
          </div>

          {/* FOOTER CONTAINER */}
          <div className="d-flex justify-content-end">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

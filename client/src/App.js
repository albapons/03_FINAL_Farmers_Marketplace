import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Suppliers from "./components/Suppliers";
import ContactUs from "./components/ContactUs";
import Markets from "./components/Markets";
import Home from "./components/Home";
import ApiRecipe from "./components/ApiRecipe";
import ProductToDisplay from "./components/ProductToDisplay";
import GeoLocator from "./components/GeoLocator";
import TermsService from "./components/TermsService";

import "./App.css";
import Login from "./components/Login";

import Register from "./components/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: "", lng: "", username: "", login: false };
  }

  componentDidMount() {
    this.closeNav();
    if (localStorage.getItem("username"))
      this.setState({ username: localStorage.getItem("username") });
  }

  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "20px";
  };

  setLogin = (username) => {
    this.setState({
      login: true,
    });
    console.log(this.state.login);
  };

  setLocation = (lat, lng) => {
    localStorage.setItem("lat", lat);
    localStorage.setItem("lng", lng);
<<<<<<< HEAD
  };

  onLogin = (username, history) => {
    this.setState({ username });
    history.push("/");
  };

=======
  };

  onLogin = (username, history) => {
    this.setState({ username });
    history.push("/");
  };

>>>>>>> 9ba0f5ed1645e9fbfecb55b6a84a2bb0bd9d082a
  logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    this.setState({ username: "" });
  };

  render() {
    return (
      <Router>
        <div className="App">
          {/* SIDENAV CONTAINER */}
          <div id="mySidenav" className="sidenav">
            <a className="closebtn" onClick={() => this.closeNav()}>
              &times;
            </a>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/markets">Markets</Link>
            <Link to="/suppliers">Suppliers</Link>
            <Link to="/recipe">Recipe Of The Week</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div id="main">
          {/* TOP CONTAINER */}
          <div className="header">
            <div>
              <Link to="/">
                <h1 className=""> FARMER'S MARKETPLACE</h1>
              </Link>
            </div>

            <div className="d-flex align-items-center">
              {this.state.username ? (
                <div>
                  {/* If we have logged in, show the username */}
                  <Link to={"/username"}>
                    Hi {this.state.username}!
                    <i className="fas fa-user-circle mx-3 CCblue fa-2x"></i>
                  </Link>

                  {/* Logout */}
                  <span onClick={() => this.logOut()}>
                    <i className="fas fa-power-off CCblue fa-2x"></i>
                  </span>
                  {console.log(this.state.username)}
                </div>
              ) : (
                <div>
                  <Link to={"/register"} className="d-flex align-items-center">
                    Register
                    <i className="fas fa-sign-in-alt mx-3 CCblue fa-2x"></i>
                  </Link>

                  <Link to={"/login"} className="d-flex align-items-center">
                    Login
                    <i className="fas fa-sign-in-alt mx-3 CCblue fa-2x"></i>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div id="body" className="row my-5">
            <span className="navBarButton" onClick={() => this.openNav()}>
              <i className="fas fa-chevron-circle-down fa-rotate-90 CCblue fa-3x"></i>
            </span>
            <Switch>
              <Route
                path="/login"
                render={(props) => <Login onLogin={this.onLogin} {...props} />}
              />
              <Route path="/register" component={Register} />
              <Route path="/products/:id">
                <ProductToDisplay />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/markets">
                <Markets />
              </Route>
              <Route path="/suppliers">
                <Suppliers />
              </Route>
              <Route path="/recipe">
                <ApiRecipe />
              </Route>
              <Route path="/contact">
                <ContactUs />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>

          {/* FOOTER CONTAINER */}
          <div className="d-flex justify-content-end my-5 mx-5">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
        <GeoLocator
          lat=""
          lng=""
          setLocation={(lat, lng) => this.setLocation(lat, lng)}
        />
      </Router>
    );
  }
}

export default App;

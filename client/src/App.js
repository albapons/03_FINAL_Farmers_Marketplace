import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* SIDENAV CONTAINER */}

      <div>
        {/* BUTTON FOR A SIDENAV */}
        <button>
          <i class="fas fa-bars" />
          <i class="fas fa-chevron-circle-down" />
          <i class="fas fa-ellipsis-h" />
        </button>
        {/* TOP CONTAINER */}
        <div>
          <h1>FARMER'S MARKETPLACE</h1>
          {/* If there are a username */}
          Hi {username}!<i class="fas fa-user-circle"></i>
          {/* If there are not a username */}
          Login
          <i class="fas fa-sign-in-alt"></i>
        </div>
      </div>
      {/* BODY CONTAINER */}
      <div>
        <img
          src="https://color.romanuke.com/wp-content/uploads/2016/08/cvetovaya-palitra-2987.png"
          alt="Error"
        />
      </div>
      {/* FOOTER CONTAINER */}
      <div></div>
    </div>
  );
}

export default App;

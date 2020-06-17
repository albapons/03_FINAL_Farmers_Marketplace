import React, { Component } from "react";
import "../App.css";

import Suppliers from "./Suppliers";


export default class SuppliersCard extends Component {

 constructor(props) {
   super(props)
   
 }



render() {

  const {users} = this.state;

    return (

      <div className="buyersCard">
        <div className="d-flex justify-content-center my-3">
          {console.log(this.props.user)}
          <img
            src="https://color.romanuke.com/wp-content/uploads/2016/08/cvetovaya-palitra-2987.png"
            alt="Error"
            width="200px"
            height="200px"
          />
        </div>


          
      



        <br />


       

        

     {user.id}


        
        {user.id}

        <h5 className="mt-2">

         
   

         
 
          <strong>{user.company_name}</strong>

        </h5>

       
      {user.postcode} - {user.city}



        <br />

        {user.tel_no} 


        <br />

    {user.website} 

      </div>
    );
  }
}

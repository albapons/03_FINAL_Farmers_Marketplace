import React, { Component } from "react";
import SuppliersCard from "./SuppliersCard";


export default class Suppliers extends Component {
  

  render() {
   
    return (
      <div className="container">
        <div className="d-flex justify-content-center  my-5">
          <div className="square">GOOGLE MAP HERE</div>
        </div>
        <div className="d-flex justify-content-between">
          <SuppliersCard id="1"/>
          <SuppliersCard id="3"/>
          <SuppliersCard id="4"/>
          <SuppliersCard id="5" /> 
        
          
         
          
           
        </div>
      </div>
    );
  }
}
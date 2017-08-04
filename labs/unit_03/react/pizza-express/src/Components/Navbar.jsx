import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class Navbar extends Component {
  render() {
    return (
      <div id="root">
        <div className="Navbar">
          <a href="#description">Our Story</a>
          <a href="#menu">Menu</a>
          <h1>WELCOME TO PIZZA EXPRESS</h1>
          <a href="#locations">Locations</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
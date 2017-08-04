import React, { Component } from 'react';
import './index.css';
import SplashImage from './Components/SplashImage.jsx';
import Navbar from './Components/Navbar.jsx';
import Contact from './Components/Contact.jsx';



class App extends Component {
  render() {
    return (

      <div className="App">
       	<SplashImage />
       	<Navbar />
      </div>

    );
  }
}

export default App;
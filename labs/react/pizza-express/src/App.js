import React, { Component } from 'react';
import NavBar from './Components/Navbar';
import SplashImage from './Components/SplashImage';
import Description from './Components/Description';
import MenuList from './Components/MenuList';
import LocationList from './Components/LocationList';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SplashImage />
        <Description />
        <MenuList />
        <LocationList />
        <Contact />

      </div>

    );
  }
}

export default App;
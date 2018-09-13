import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Particles from 'react-particles-js';
 

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        <Particles className='particles' params={particlesOptions} />
       
       {  /* 
       
        <FaceRecognisation /> */
       }
  
      </div>
    )
  }
}

export default App;
